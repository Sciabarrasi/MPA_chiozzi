import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}