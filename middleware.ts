import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get('_token')?.value;
    console.log("middleware", token, request.nextUrl.pathname.startsWith('/login'));
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (token && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*', '/login'],
}