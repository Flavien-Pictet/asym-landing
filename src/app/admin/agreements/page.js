'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAllApps } from '@/lib/appsConfig'

export default function AdminAgreementsPage() {
	const [agreements, setAgreements] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedApp, setSelectedApp] = useState('all')
	const router = useRouter()

	const apps = getAllApps()

	const fetchAgreements = async () => {
		setIsLoading(true)
		setError('')

		try {
			const url = selectedApp === 'all'
				? '/api/admin/agreements'
				: `/api/admin/agreements?appId=${selectedApp}`

			const response = await fetch(url)

			if (response.status === 401) {
				router.push('/admin/login')
				return
			}

			const data = await response.json()

			if (response.ok) {
				setAgreements(data.agreements || [])
			} else {
				setError(data.error || 'Failed to fetch agreements')
			}
		} catch (err) {
			setError('Connection error. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchAgreements()
	}, [selectedApp])

	const handleLogout = async () => {
		try {
			await fetch('/api/admin/auth/logout', { method: 'POST' })
			router.push('/admin/login')
		} catch (err) {
			console.error('Logout error:', err)
		}
	}

	const filteredAgreements = agreements.filter((agreement) => {
		const searchLower = searchTerm.toLowerCase()
		return (
			agreement.fullName?.toLowerCase().includes(searchLower) ||
			agreement.paypalUsername?.toLowerCase().includes(searchLower) ||
			agreement.tiktokUsername?.toLowerCase().includes(searchLower) ||
			agreement.discordUsername?.toLowerCase().includes(searchLower)
		)
	})

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
								<span className="text-white text-sm font-bold">AL</span>
							</div>
							<span className="font-semibold text-gray-900">Admin Panel</span>
						</div>
						<button
							onClick={handleLogout}
							className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
							</svg>
							Logout
						</button>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">UGC Creator Agreements</h1>
					<p className="text-gray-600 mt-1">{filteredAgreements.length} total submissions</p>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
					<div className="flex flex-col sm:flex-row gap-4">
						{/* Search */}
						<div className="flex-1">
							<div className="relative">
								<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
								<input
									type="text"
									placeholder="Search by name, username, or email..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
								/>
							</div>
						</div>

						{/* App Filter */}
						<div className="sm:w-48">
							<select
								value={selectedApp}
								onChange={(e) => setSelectedApp(e.target.value)}
								className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
							>
								<option value="all">All Apps</option>
								{apps.map((app) => (
									<option key={app.id} value={app.id}>
										{app.displayName}
									</option>
								))}
							</select>
						</div>

						{/* Refresh */}
						<button
							onClick={fetchAgreements}
							disabled={isLoading}
							className="px-4 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
						>
							<svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							Refresh
						</button>
					</div>
				</div>

				{/* Error State */}
				{error && (
					<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
						<p className="text-red-600">{error}</p>
					</div>
				)}

				{/* Loading State */}
				{isLoading ? (
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
						<div className="flex items-center justify-center">
							<svg className="animate-spin h-8 w-8 text-gray-400" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
							</svg>
						</div>
					</div>
				) : filteredAgreements.length === 0 ? (
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
						<svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
						<p className="text-gray-500">No agreements found</p>
					</div>
				) : (
					/* Table */
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="bg-gray-50 border-b border-gray-200">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											Full Name
										</th>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											PayPal
										</th>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											TikTok
										</th>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											Discord
										</th>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											App
										</th>
										<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
											Date
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{filteredAgreements.map((agreement, index) => (
										<tr key={index} className="hover:bg-gray-50 transition-colors">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{agreement.fullName || '-'}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
												{agreement.paypalUsername || '-'}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
												{agreement.tiktokUsername || '-'}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
												{agreement.discordUsername || '-'}
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
													{agreement.appId || '-'}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
												{agreement.date || '-'}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</main>
		</div>
	)
}
