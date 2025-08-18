import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/providers";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WK2MTK76');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK2MTK76"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}