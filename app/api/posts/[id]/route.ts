import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request, 
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id || isNaN(Number(params.id))) {
      return NextResponse.json(
        { error: 'ID de post inválido' },
        { status: 400 }
      );
    }

    const postId = Number(params.id);
    
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: {
        id: true,
        title: true,
        content: true,
        imageUrl: true,
        imagePublicId: true,
        createdAt: true,
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error obteniendo el post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}