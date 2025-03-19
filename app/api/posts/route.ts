import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { title, content } = reqBody;

        const newPost = await prisma.post.create({
            data: {
                userId: 1,
                title,
                content,
            },
        });
        return new NextResponse(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
        console.error("Error creando el post: ", error);
        return new NextResponse(
            JSON.stringify({ error: "Error en la API al crear el post" }), { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id || isNaN(Number(id))) {
            return new NextResponse(JSON.stringify({ error: "El ID es requerido y debe ser un número válido." }), { status: 400 });
        }

        const post = await prisma.post.findUnique({ where: { id: Number(id) } });

        if (!post) {
            return new NextResponse(JSON.stringify({ error: "Post no encontrado." }), { status: 404 });
        }

        await prisma.post.delete({
            where: { id: Number(id) },
        });
        return new NextResponse(JSON.stringify({ message: "Post eliminado correctamente" }), { status: 200 });
    } catch (error) {
        console.error("Error eliminando el post: ", error);
        return new NextResponse(JSON.stringify({ error: "Error al eliminar el post." }), { status: 500 });
    }
}