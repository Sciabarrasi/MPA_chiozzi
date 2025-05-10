import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Tu Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        const userFound = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!userFound) throw new Error("Usuario no encontrado");

        const validPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!validPassword) throw new Error("Contraseña incorrecta");

        return {
          id: userFound.id.toString(),
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
          name: token.name as string
        }
      };
    },
  },
  pages: {
    signIn: "/login",
    error: "/access-denied",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};