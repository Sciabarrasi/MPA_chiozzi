import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

type JWTToken = {
  id: string;
  email: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; 
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/api/users/register") {
    return NextResponse.next()
  }

  const protectedRoutes = ['/api/users']
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtected) {
    try {
      const token = await getToken({ 
        req: request,
        secret: process.env.NEXTAUTH_SECRET
      }) as JWTToken | null

      if (!token) {
        const loginUrl = new URL('/access-denied', request.url)
        loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
      }

      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-user-id', token.id)
      requestHeaders.set('x-user-email', token.email)

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      console.error("Error en middleware getToken:", error)
      return new Response("Error interno en autenticación", { status: 500 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/users/:path*',
  ],
}
