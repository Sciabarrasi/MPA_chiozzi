import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    console.log('=== DEBUG INFO ===');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('Prisma instance:', !!prisma);
    
    console.log('Attempting to connect to database...');
    
    await prisma.$connect();
    console.log('Database connection successful');
    
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
    
    console.log('Posts retrieved successfully:', posts.length);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("=== ERROR DETAILS ===");
    console.error("Error obteniendo los posts: ", error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = error && typeof error === 'object' && 'code' in error ? error.code : undefined;
    
    console.error("Error message:", errorMessage);
    console.error("Error code:", errorCode);
    
    return NextResponse.json(
      { 
        error: "Error obteniendo los posts",
        details: errorMessage,
        code: errorCode
      },
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