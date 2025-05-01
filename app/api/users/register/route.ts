import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json({ message: "Todos los campos son obligatorios" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ message: "Por favor ingresa un email válido" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "El usuario ya existe" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    return NextResponse.json({ message: "Usuario registrado correctamente", user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Ocurrió un error en el servidor" }, { status: 500 });
  }
}
