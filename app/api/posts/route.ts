import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        imageUrl: true,
        imagePublicId: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error obteniendo los posts: ", error);
    return NextResponse.json(
      { error: "Error obteniendo los posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, imagePublicId, imageUrl, userId } = body;

  if (!userId) {
    return NextResponse.json(
      { error: "userId es obligatorio" },
      { status: 400 }
    );
  }

  try {
    const userIdNumber = parseInt(userId, 10);
    
    if (isNaN(userIdNumber)) {
      return NextResponse.json(
        { error: "userId debe ser un número válido" },
        { status: 400 }
      );
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imagePublicId,
        imageUrl,
        userId: userIdNumber,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creando el post:", error);
    return NextResponse.json(
      { 
        error: "Error creando el post",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}