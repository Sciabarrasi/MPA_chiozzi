import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

// Definición de tipos para la API de cookies
interface AppCookies {
  set: (options: {
    name: string;
    value: string;
    httpOnly?: boolean;
    secure?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: 'strict' | 'lax' | 'none';
  }) => void;
  delete: (name: string) => void;
  get: (name: string) => { value: string } | undefined;
}

// Función para obtener el store de cookies con tipos seguros
const getCookieStore = (): AppCookies => {
  return cookies() as unknown as AppCookies;
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const setAuthCookie = (userId: number): void => {
  const cookieStore = getCookieStore();
  cookieStore.set({
    name: 'user-id',
    value: userId.toString(),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 día
    path: '/',
    sameSite: 'strict',
  });
};

export const removeAuthCookie = (): void => {
  const cookieStore = getCookieStore();
  cookieStore.delete('user-id');
};

export const getCurrentUser = async (): Promise<{
  id: number;
  email: string;
} | null> => {
  const cookieStore = getCookieStore();
  const userId = cookieStore.get('user-id')?.value;

  if (!userId) return null;

  return await prisma.user.findUnique({
    where: { id: Number(userId) },
    select: {
      id: true,
      email: true,
    },
  });
};