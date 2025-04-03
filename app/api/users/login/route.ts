import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword, generateToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const {username, password} = await request.json();

        if (!username || !password) { 
            return NextResponse.json(
                { error: "Usuario y contraseña son requeridos." },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Credenciales invalidas." },
                { status: 401 }
            );
        }

        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const token = generateToken(user.id);
        await setAuthCookie(token);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userData } = user;
        return NextResponse.json(userData)
    } catch (error) {
        console.error("Error de inicio de sesión:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}