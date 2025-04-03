import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { uploadImage } from '@/lib/cloudinary';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: Request) {
    try { 
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401}
            );
        }

        const formData = await request.formData();
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const imageFile = formData.get('image') as File;

        if (!title || !content || !imageFile) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            );
        }

        const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

        const { public_id, url } = await uploadImage(imageBuffer);

        const post = await prisma.post.create({
            data: {
                title,
                content,
                imagePublicId: public_id,
                imageUrl: url,
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