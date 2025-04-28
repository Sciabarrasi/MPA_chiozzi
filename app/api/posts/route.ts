// app/api/posts/route.ts
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

        // Cambiamos a JSON en lugar de FormData
        const { title, content, imageUrl, imagePublicId } = await request.json();

        if (!title || !content || !imageUrl || !imagePublicId) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Validación adicional para la URL de Cloudinary
        if (!imageUrl.startsWith('https://res.cloudinary.com/')) {
            return NextResponse.json(
                { error: 'URL de imagen no válida' },
                { status: 400 }
            );
        }

        const post = await prisma.post.create({
            data: { 
                title,
                content,
                imageUrl,    // URL segura de Cloudinary (secure_url)
                imagePublicId, // public_id de Cloudinary
                userId: user.id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error: any) {
        console.error('Error al crear post:', error);
        
        // Manejo específico para errores de Prisma
        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'El post ya existe' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// Nuevo endpoint para obtener posts
export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            }
        });

        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error al obtener posts:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}