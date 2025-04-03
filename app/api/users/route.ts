import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword, generateToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password ) {
      return NextResponse.json(
        { error: "Usuario y contraseña son requeridos."},
        { status: 400 }
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "El usuario ya esta registrado" },
        { status: 400 }
      );
    }

    //crear usuario
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        createdAt: true,
      },
    });

    const token = generateToken(user.id);
    await setAuthCookie(token);
  
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error al crear el usuario: ", error);
    return NextResponse.json(
      { error: "Error al crear el usuario." },
      { status: 500 }
    );
  }
}