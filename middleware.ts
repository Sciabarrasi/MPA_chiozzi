import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Define el tipo para el token
type JWTToken = {
  id: string;
  email: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; 
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rutas protegidas
  const protectedRoutes = ['/api/posts', '/api/users']
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtected) {
    const token = await getToken({ 
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    }) as JWTToken | null // Type assertion aquí

    if (!token) {
      const loginUrl = new URL('/access-denied', request.url)
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Agregar headers con información del usuario
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', token.id) // Ahora token.id es reconocido como string
    requestHeaders.set('x-user-email', token.email) // Ahora token.email es reconocido como string

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/posts/:path*',
    '/api/users/:path*',
    // Agrega otras rutas que necesites proteger
  ],
}