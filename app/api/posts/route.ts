import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST: Crear un nuevo post
export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, imagePublicId, imageUrl, userId } = body;

  if (!userId) {
    return NextResponse.json({ error: 'userId es obligatorio' }, { status: 400 });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imagePublicId,
        imageUrl,
        userId,  // ahora sí, pasamos un número válido
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creando el post:', error);
    return NextResponse.json({ error: 'Error creando el post' }, { status: 500 });
  }
}
