import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Chiozzi S.A – Industria Gráfica Eduardo Chiozzi S.A.",
  description: "En Eduardo Chiozzi S.A nos especializamos en el diseño de etiquetas personalizadas para todo tipo de productos. Combinamos creatividad e innovación para destacar tu marca con etiquetas únicas y de alta calidad. ¡Potencia la imagen de tus productos con nosotros!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
