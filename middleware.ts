import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/dashboard') {
    const username = request.cookies.get('username')
    const password = request.cookies.get('password')

    // Verifica si las credenciales existen y son válidas
    if (username !== process.env.NEXT_PUBLIC_USERNAME || password !== process.env.NEXT_PUBLIC_PASSWORD) {
      const accessDeniedUrl = new URL('/access-denied', request.url)
      return NextResponse.redirect(accessDeniedUrl)
    }
  }

  // Permite el acceso a otras rutas
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}