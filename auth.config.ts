import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

// Define el tipo para las credenciales
interface Credentials {
  email: string;
  password: string;
}

export const config: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Tu Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) { // Hacemos que credentials pueda ser undefined
        if (!credentials) {
          return null; // Si no hay credenciales, retornamos null
        }

        const { email, password } = credentials;

        const userFound = await prisma.user.findUnique({
          where: { email },
        });

        if (!userFound) throw new Error("Usuario Inválido!");

        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!validPassword) throw new Error("Contraseña Inválida");

        return {
          id: userFound.id + "",
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const user = session.user as { id: string };
        user.id = token.sub as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
