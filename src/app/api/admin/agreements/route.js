import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { getAppConfig, getAllApps } from '@/lib/appsConfig'

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
	const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}')

	const auth = new google.auth.GoogleAuth({
		credentials,
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	})

	const sheets = google.sheets({ version: 'v4', auth })
	return sheets
}

export async function GET(request) {
	try {
		// Check authentication
		const authCookie = request.cookies.get('admin_authenticated')
		if (authCookie?.value !== 'true') {
			return NextResponse.json(
				{ error: 'Unauthorized' },
				{ status: 401 }
			)
		}

		const { searchParams } = new URL(request.url)
		const appId = searchParams.get('appId')

		// Get Google Sheets client
		const sheets = await getGoogleSheetsClient()

		// If specific app requested, fetch from that app's sheet
		if (appId && appId !== 'all') {
			const appConfig = getAppConfig(appId)
			if (!appConfig) {
				return NextResponse.json(
					{ error: 'Invalid app ID' },
					{ status: 400 }
				)
			}

			const agreements = await fetchAgreementsFromSheet(sheets, appConfig)
			return NextResponse.json({ agreements })
		}

		// Fetch from all apps
		const allApps = getAllApps()
		let allAgreements = []

		for (const app of allApps) {
			try {
				const agreements = await fetchAgreementsFromSheet(sheets, app)
				allAgreements = [...allAgreements, ...agreements]
			} catch (error) {
				console.error(`Error fetching agreements for ${app.id}:`, error)
			}
		}

		// Sort by timestamp (most recent first)
		allAgreements.sort((a, b) => {
			const dateA = new Date(a.timestamp || 0)
			const dateB = new Date(b.timestamp || 0)
			return dateB - dateA
		})

		return NextResponse.json({ agreements: allAgreements })

	} catch (error) {
		console.error('Error fetching agreements:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch agreements', details: error.message },
			{ status: 500 }
		)
	}
}

async function fetchAgreementsFromSheet(sheets, appConfig) {
	const spreadsheetId = appConfig.sheets?.spreadsheetId || process.env.GOOGLE_SPREADSHEET_ID
	const sheetName = appConfig.sheets?.sheetName || 'Agreements'

	if (!spreadsheetId) {
		console.warn(`No spreadsheet configured for app: ${appConfig.id}`)
		return []
	}

	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range: `${sheetName}!A:I`,
		})

		const rows = response.data.values || []

		// Skip header row if present
		const dataRows = rows.length > 0 && rows[0][0] === 'Timestamp' ? rows.slice(1) : rows

		return dataRows.map((row) => ({
			timestamp: row[0] || '',
			fullName: row[1] || '',
			paypalUsername: row[2] || '',
			tiktokUsername: row[3] || '',
			discordUsername: row[4] || '',
			date: row[5] || '',
			appId: row[6] || appConfig.id,
			contractType: row[7] || 'default',
			hasSignature: row[8] === 'Yes',
		}))

	} catch (error) {
		// Handle sheet not found gracefully
		if (error.code === 404 || error.message?.includes('Unable to parse range')) {
			console.warn(`Sheet not found for app: ${appConfig.id}`)
			return []
		}
		throw error
	}
}
