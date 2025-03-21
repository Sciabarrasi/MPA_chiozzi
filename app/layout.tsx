import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter ({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eduardo Chiozzi S.A – Industria Gráfica Eduardo Chiozzi S.A.",
  description: "En Eduardo Chiozzi S.A nos especializamos en el diseño de etiquetas personalizadas para todo tipo de productos. Combinamos creatividad e innovación para destacar tu marca con etiquetas únicas y de alta calidad. ¡Potencia la imagen de tus productos con nosotros!",
  keywords: [
    "diseño gráfico",
    "etiquetas autoadhesivas",
    "etiquetas no autoadhesivas",
    "flowpack",
    "etiquetas personalizadas",
    "etiquetas adhesivas",
    "impresión de etiquetas",
    "creatividad en etiquetas",
    "innovación en etiquetas",
    "alta calidad en etiquetas",
    "packaging",
    "branding"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
