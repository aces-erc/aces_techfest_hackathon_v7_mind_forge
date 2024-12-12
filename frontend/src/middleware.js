import { NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard', "/dashboard/patient"];
const isPublicRoute = ['/login', '/signup'];


// 2. Define the middleware
export async function middleware(request) {
    const accessToken = request.cookies.get('token')?.value;

    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path);

    if (!accessToken && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}