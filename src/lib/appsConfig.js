// Central configuration for all apps using the agreement system
// To add a new app, simply add a new entry to the APPS object

export const APPS = {
	redflagz: {
		id: 'redflagz',
		name: 'Redflagz',
		displayName: 'Redflagz',
		company: 'Asymmetric Labs FZC',
		route: '/redflagz-agreement',
		// Colors for branding
		colors: {
			primary: '#DC2626', // Red
			primaryHover: '#B91C1C',
			accent: '#FEE2E2',
		},
		// Contract types available for this app
		contracts: {
			default: {
				name: 'Standard',
				retainer: 10,
				monthlyCapPosts: 60,
				monthlyRetainerMax: 600,
				cpm: 0.60,
				capPerVideo: 200,
				viewThreshold: 10000,
				dealType: 'CPM + UGC',
				tier: 'A',
				contentType: 'Voiceless',
				crossPost: {
					enabled: true,
					platform: 'Instagram',
					cpm: 0.60,
					capPerVideo: 200,
					totalUploadsPerMonth: 120,
					viewThreshold: 0,
				},
				paymentText: 'The Advertiser pays the Creator $10 per video, with a monthly cap of 60 posts, meaning the monthly retainer can go up to $600. There\'s a $0.60 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram and earn a $0.60 CPM capped at $200 per video, allowing up to 120 uploads per month. Every views under the $200 cap are eligible on Instagram. The $10 retainer applies only to TikTok.',
			},
			lite: {
				name: 'Lite',
				retainer: 5,
				monthlyCapPosts: 60,
				monthlyRetainerMax: 300,
				cpm: 0.70,
				capPerVideo: 200,
				viewThreshold: 10000,
				dealType: 'CPM + UGC',
				tier: 'A',
				contentType: 'Voiceless',
				crossPost: {
					enabled: true,
					platform: 'Instagram',
					cpm: 0.70,
					capPerVideo: 200,
					totalUploadsPerMonth: 120,
					viewThreshold: 0,
				},
				paymentText: 'The Advertiser pays the Creator $5 per video, with a monthly cap of 60 posts, meaning the monthly retainer can go up to $300. There\'s a $0.70 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram and earn a $0.70 CPM capped at $200 per video, allowing up to 120 uploads per month. Every views under the $200 cap are eligible on Instagram. The $5 retainer applies only to TikTok.',
			},
			pro: {
				name: 'Pro',
				retainer: 0,
				monthlyCapPosts: null,
				monthlyRetainerMax: 0,
				cpm: 1.00,
				capPerVideo: 150,
				viewThreshold: 0,
				dealType: 'CPM + UGC',
				tier: 'A',
				contentType: 'Voiceless',
				crossPost: {
					enabled: true,
					platform: 'Instagram',
					cpm: 1.00,
					capPerVideo: 150,
					totalUploadsPerMonth: null,
					viewThreshold: 0,
				},
				paymentText: 'The Advertiser pays the Creator based on performance only (no retainer). There\'s a $1.00 CPM on every 1,000 views generated, capped at $150 per video. All views are eligible for the CPM from the first view. The creator may cross-post the same video on Instagram and earn a $1.00 CPM capped at $150 per video.',
			},
		},
		// Google Sheets configuration
		sheets: {
			spreadsheetId: process.env.REDFLAGZ_SPREADSHEET_ID || process.env.GOOGLE_SPREADSHEET_ID,
			sheetName: 'Creators',
		},
	},
	taller: {
		id: 'taller',
		name: 'Taller',
		displayName: 'Taller',
		company: 'Asymmetric Labs FZC',
		route: '/taller-agreement',
		// Colors for branding
		colors: {
			primary: '#8B5CF6', // Purple
			primaryHover: '#7C3AED',
			accent: '#EDE9FE',
		},
		// Contract types available for this app
		contracts: {
			default: {
				name: 'Standard',
				retainer: 12.5,
				monthlyCapPosts: 60,
				monthlyRetainerMax: 750,
				cpm: 0.60,
				capPerVideo: 200,
				viewThreshold: 10000,
				crossPost: {
					enabled: true,
					platform: 'Instagram',
					cpm: 0.60,
					capPerVideo: 200,
					totalUploadsPerMonth: 120,
					viewThreshold: 0,
				},
				paymentText: 'The Advertiser pays the Creator $12.5 per video, with a monthly cap of 60 posts, meaning the monthly retainer can go up to $750. There\'s a $0.60 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram and earn a $0.60 CPM capped at $200 per video, allowing up to 120 uploads per month. Every views under the $200 cap are eligible on Instagram. The $12.5 retainer applies only to TikTok.',
			},
		},
		// Google Sheets configuration
		sheets: {
			spreadsheetId: process.env.TALLER_SPREADSHEET_ID,
			sheetName: process.env.TALLER_SHEET_NAME || 'Creators 2.0',
		},
	},
}

// Helper functions
export function getAppConfig(appId) {
	return APPS[appId] || null
}

export function getContractConfig(appId, contractType = 'default') {
	const app = APPS[appId]
	if (!app) return null
	return app.contracts[contractType] || app.contracts.default
}

export function getAllApps() {
	return Object.values(APPS)
}

export function getAppIds() {
	return Object.keys(APPS)
}
