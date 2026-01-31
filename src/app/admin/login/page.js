'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		setIsLoading(true)

		try {
			const response = await fetch('/api/admin/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password }),
			})

			const data = await response.json()

			if (response.ok) {
				router.push('/admin/agreements')
			} else {
				setError(data.error || 'Invalid password')
			}
		} catch (err) {
			setError('Connection error. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="max-w-md w-full">
				<div className="bg-white rounded-lg shadow-md p-8">
					<div className="text-center mb-8">
						<div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-white text-xl font-bold">AL</span>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
						<p className="text-gray-600 mt-2">Enter your password to continue</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
								placeholder="Enter admin password"
								required
								autoFocus
							/>
						</div>

						{error && (
							<div className="p-3 bg-red-50 border border-red-200 rounded-md">
								<p className="text-sm text-red-600">{error}</p>
							</div>
						)}

						<button
							type="submit"
							disabled={isLoading || !password}
							className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						>
							{isLoading ? (
								<span className="flex items-center justify-center gap-2">
									<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
									</svg>
									Logging in...
								</span>
							) : (
								'Login'
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
