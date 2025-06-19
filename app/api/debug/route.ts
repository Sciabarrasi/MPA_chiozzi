import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    nextauthSecretExists: !!process.env.NEXTAUTH_SECRET,
    nextauthUrl: process.env.NEXTAUTH_URL,
    databaseUrlExists: !!process.env.DATABASE_URL,
    timestamp: new Date().toISOString(),
  });
}