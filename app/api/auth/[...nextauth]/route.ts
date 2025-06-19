import NextAuth from "next-auth";
import { authOptions } from "@/auth.config";

console.log("NextAuth route handler loaded");
console.log("NEXTAUTH_SECRET exists:", !!process.env.NEXTAUTH_SECRET);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };