import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

let currentUserCache: { id: number; username: string } | null = null;

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
}

export const generateToken = (userId: number): string => { 
    return sign({ userId }, SECRET_KEY, { expiresIn: "1h" });
}

export const verifyToken = (token: string): { userId: number } => {
    return verify(token, SECRET_KEY) as { userId: number };
}

export const setAuthCookie = async (token: string): Promise<void> => {
    const cookieStorage = await cookies();
    cookieStorage.set("auth-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: '/',
        sameSite: 'strict'
    });
};

export const removeAuthCookie = async (): Promise<void> => {
    const cookieStore = await cookies();
    cookieStore.delete("auth-token");
};

export const getCurrentUser = async (): Promise<{
    id: number;
    username: string;
} | null> => {
    if (currentUserCache) return currentUserCache;

    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) return null;

    try {
        const { userId } = verifyToken(token);
        
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true
            }
        });

        if (user) {
            currentUserCache = user;
            setTimeout(() => {
                currentUserCache = null;
            }, 300000); // 5 minutos en milisegundos
        }

        return user;
    } catch (error) {
        console.error("Error al verificar token:", error);
        return null;
    }
};

export const clearUserCache = (): void => {
    currentUserCache = null;
};