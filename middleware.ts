import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/access-denied', request.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);

    if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    // NO FUNCIONA ESTA PARTE
    //return NextResponse.redirect(new URL('/access-denied', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
