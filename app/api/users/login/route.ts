import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword, generateToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) { 
      return NextResponse.json(
        { error: "Email y contraseña son requeridos." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Credenciales inválidas." },
        { status: 401 }
      );
    }

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    const token = generateToken(user.id);
    await setAuthCookie(token);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = user;
    return NextResponse.json({
      ...userData,
      token
    });
  } catch (error) {
    console.error("Error de inicio de sesión:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}