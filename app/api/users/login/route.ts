import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { comparePassword } from '@/lib/auth';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos.' },
        { status: 400 }
      );
    }

    console.log(`Buscando usuario con el email: ${email.toLowerCase()}`);

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      console.log(`Usuario no encontrado para el email: ${email}`);
      return NextResponse.json(
        { error: 'Credenciales inválidas.' },
        { status: 401 }
      );
    }

    console.log(`Usuario encontrado: ${user.email}`);

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      console.log(`Contraseña incorrecta para el usuario: ${email}`);
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar el token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    const response = NextResponse.json({
      message: 'Login exitoso',
      user: {
        id: user.id,
        email: user.email,
      },
    });

    // Setear cookie con el token
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 día
      path: '/',
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
