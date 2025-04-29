// app/api/users/register/route.ts
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validaciones básicas
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email y contraseña son requeridos" },
        { status: 400 }
      )
    }

    // Validación de formato de email simple
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Por favor ingresa un email válido" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "La contraseña debe tener al menos 6 caracteres" },
        { status: 400 }
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "El email ya está registrado" },
        { status: 409 }
      )
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear el nuevo usuario
    const newUser = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      }
    })

    return NextResponse.json(
      { 
        user: newUser, 
        message: "¡Registro exitoso! Ahora puedes iniciar sesión" 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error en el registro:", error)
    return NextResponse.json(
      { message: "Ocurrió un error durante el registro" },
      { status: 500 }
    )
  }
}