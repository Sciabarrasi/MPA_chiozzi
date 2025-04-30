import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, imagePublicId, imageUrl } = body;

  try {
    // Buscar si el usuario "eduardo_chiozzi@gmail.com" existe
    let user = await prisma.user.findUnique({
      where: { email: 'eduardo_chiozzi@gmail.com' }, // Buscar por el correo del usuario privilegiado
    });

    // Si el usuario no existe, crearlo
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'eduardo_chiozzi@gmail.com',
          password: '', // Si no necesitas usar una contraseña, déjalo vacío
          name: 'Eduardo Chiozzi S.A', // O el nombre que prefieras
        },
      });
    }

    // Crear el post relacionado con el usuario
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imagePublicId,
        imageUrl,
        userId: user.id, // Relacionamos el post con el usuario "Eduardo Chiozzi"
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creando el post:', error);
    return NextResponse.json({ error: 'Error creando el post' }, { status: 500 });
  }
}
