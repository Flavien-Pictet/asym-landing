import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { getAppConfig } from '@/lib/appsConfig'

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
	const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}')

	const auth = new google.auth.GoogleAuth({
		credentials,
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	})

	const sheets = google.sheets({ version: 'v4', auth })
	return sheets
}

export async function POST(request) {
	try {
		const body = await request.json()
		const {
			fullName,
			paypalUsername,
			tiktokUsername,
			instagramUsername,
			discordUsername,
			date,
			signature,
			appId,
			contractType = 'default',
		} = body

		// Validate required fields
		if (!paypalUsername || !discordUsername || !date || !signature || !appId) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			)
		}

		// Get app configuration
		const appConfig = getAppConfig(appId)
		if (!appConfig) {
			return NextResponse.json(
				{ error: 'Invalid app ID' },
				{ status: 400 }
			)
		}

		// Get contract configuration
		const contract = appConfig.contracts[contractType] || appConfig.contracts.default

		// Get spreadsheet ID from app config or environment variable
		const spreadsheetId = appConfig.sheets?.spreadsheetId || process.env.GOOGLE_SPREADSHEET_ID

		if (!spreadsheetId) {
			console.error('No spreadsheet ID configured for app:', appId)
			return NextResponse.json(
				{ error: 'Configuration error', details: 'No spreadsheet configured' },
				{ status: 500 }
			)
		}

		// Initialize Google Sheets client
		const sheets = await getGoogleSheetsClient()

		// Prepare the row data according to the new structure
		// A: tiktok username
		// B: instagram username
		// C: discord username
		// D: deal type
		// E: cost / video
		// F: CPM
		// G: Bonus eligibility
		// H: Contract has changed?
		// I: Contract changed date
		// J: Total paid
		// K: Tier
		// L: Cap per video
		// M: Type
		// N: paypal
		const rowData = [
			tiktokUsername || '',                        // A: TikTok Username
			instagramUsername || '',                     // B: Instagram Username
			discordUsername,                             // C: Discord Username
			contract.dealType || 'CPM + UGC',           // D: Deal Type
			`$${contract.retainer || 10}`,              // E: Cost / Video
			`$${contract.cpm || 0.60}`,                 // F: CPM
			'yes',                                       // G: Bonus eligibility
			'no',                                        // H: Contract has changed?
			'',                                          // I: Contract changed date
			'',                                          // J: Total paid
			contract.tier || 'A',                        // K: Tier
			`$${contract.capPerVideo || 200}`,          // L: Cap per video
			contract.contentType || 'Voiceless',        // M: Type
			paypalUsername,                              // N: PayPal
		]

		// Append to Google Sheets
		const sheetName = appConfig.sheets?.sheetName || 'Creators'

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: `${sheetName}!A:N`,
			valueInputOption: 'USER_ENTERED',
			insertDataOption: 'INSERT_ROWS',
			requestBody: {
				values: [rowData],
			},
		})

		return NextResponse.json({
			success: true,
			message: 'Agreement submitted successfully',
		})

	} catch (error) {
		console.error('Error submitting agreement:', error)

		// Handle specific Google API errors
		if (error.code === 403) {
			return NextResponse.json(
				{ error: 'Permission denied', details: 'Check Google Sheets permissions' },
				{ status: 403 }
			)
		}

		if (error.code === 404) {
			return NextResponse.json(
				{ error: 'Spreadsheet not found', details: 'Check spreadsheet ID configuration' },
				{ status: 404 }
			)
		}

		return NextResponse.json(
			{ error: 'Failed to submit agreement', details: error.message },
			{ status: 500 }
		)
	}
}
