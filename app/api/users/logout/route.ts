import { NextResponse } from "next/server";
import { removeAuthCookie } from "@/lib/auth";

export async function POST() {
    try { 
        await removeAuthCookie();
        return NextResponse.json(
            { message: "Sesion cerrada correctamente." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        return NextResponse.json(
            {error: "Internal server error" },
            { status: 500 }
        );
    }
}