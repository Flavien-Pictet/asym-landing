import { NextResponse } from 'next/server'

export function middleware(request) {
	const authCookie = request.cookies.get('admin_authenticated')
	const { pathname } = request.nextUrl

	// Don't protect the login API
	if (pathname === '/api/admin/auth/login') {
		return NextResponse.next()
	}

	// Login page - redirect to agreements if already authenticated
	if (pathname === '/admin/login') {
		if (authCookie?.value === 'true') {
			return NextResponse.redirect(new URL('/admin/agreements', request.url))
		}
		return NextResponse.next()
	}

	// Protected admin routes
	if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
		if (authCookie?.value !== 'true') {
			// For API routes, return 401
			if (pathname.startsWith('/api/')) {
				return NextResponse.json(
					{ error: 'Unauthorized' },
					{ status: 401 }
				)
			}
			// For pages, redirect to login
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/admin/:path*', '/api/admin/:path*']
}
