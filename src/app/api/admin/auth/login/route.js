import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		const { password } = await request.json()

		const adminPassword = process.env.ADMIN_PASSWORD

		if (!adminPassword) {
			console.error('ADMIN_PASSWORD not configured')
			return NextResponse.json(
				{ error: 'Server configuration error' },
				{ status: 500 }
			)
		}

		if (password !== adminPassword) {
			return NextResponse.json(
				{ error: 'Invalid password' },
				{ status: 401 }
			)
		}

		// Create response with authentication cookie
		const response = NextResponse.json({ success: true })

		response.cookies.set('admin_authenticated', 'true', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7, // 7 days
			path: '/',
		})

		return response

	} catch (error) {
		console.error('Login error:', error)
		return NextResponse.json(
			{ error: 'Login failed' },
			{ status: 500 }
		)
	}
}
