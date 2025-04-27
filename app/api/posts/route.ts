import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(request: Request) {
    try { 
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json(
                { error: 'No autorizado' },
                { status: 401 }
            );
        }

        const formData = await request.formData();
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const imageUrl = formData.get('imageUrl') as string;
        const imagePublicId = formData.get('imagePublicId') as string;

        if (!title || !content || !imageUrl || !imagePublicId) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        const post = await prisma.post.create({
            data: { 
                title,
                content,
                imageUrl,
                imagePublicId,
                userId: user.id
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) { 
        console.error('Error al crear posteo: ', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}