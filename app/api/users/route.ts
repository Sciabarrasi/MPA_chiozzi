import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return new NextResponse(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new NextResponse(JSON.stringify({ error: 'Contraseña incorrecta' }), { status: 401 });
    }

    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    return new NextResponse(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return new NextResponse(JSON.stringify({ error: 'Error al iniciar sesión' }), { status: 500 });
  }
}