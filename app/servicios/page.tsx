import Image from "next/image";
import Link from "next/link";
import { Palette, Printer, Layers, Ruler, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 relative bg-gradient-to-br from-[#E30613]/10 via-[#D35400]/15 to-[#CA8A04]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-base sm:text-lg text-[#9CA3AF] mb-6 md:mb-8 px-2">
              En Chiozzi ofrecemos servicios integrales de alta calidad para
              todas tus necesidades de etiquetado y packaging. Desde el diseño
              hasta la impresión final, contamos con la tecnología y experiencia
              para garantizar resultados excepcionales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-[#E30613] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Diseño y Preprensa
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-[#E30613]">
                Sistemas de vanguardia
              </h3>
              <p className="text-[#9CA3AF] mb-4 md:mb-6 text-sm sm:text-base">
                Nuestro departamento de diseño y preprensa cuenta con los
                sistemas más avanzados del mercado, permitiéndonos ofrecer
                soluciones de alta calidad que cumplen con los estándares más
                exigentes.
              </p>
              <ul className="space-y-3 md:space-y-4 text-sm sm:text-base text-[#9CA3AF]">
                <li className="flex items-start">
                  <span className="text-[#E30613] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Software especializado:
                    </span>{" "}
                    Utilizamos las últimas versiones de Adobe Creative Suite y
                    software especializado para la industria gráfica.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E30613] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Pruebas digitales certificadas:
                    </span>{" "}
                    Realizamos pruebas de color certificadas que garantizan la
                    fidelidad cromática en el producto final.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E30613] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Asesoramiento técnico:
                    </span>{" "}
                    Nuestro equipo de diseñadores y técnicos brinda
                    asesoramiento especializado para optimizar cada proyecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E30613] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Flujo de trabajo automatizado:
                    </span>{" "}
                    Contamos con un sistema de flujo de trabajo que optimiza
                    tiempos y garantiza la calidad en cada etapa del proceso.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl shadow-[#E30613]/10 mt-6 md:mt-0">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Diseño+y+Preprensa"
                alt="Diseño y Preprensa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#121212]/50 backdrop-blur-sm">
                <Palette className="h-16 w-16 sm:h-20 sm:w-20 text-[#E30613] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-[#18181B]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-[#E30613] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Impresión Flexográfica de Alta Calidad
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl shadow-[#D35400]/10 mt-6 md:mt-0">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Impresión+Flexográfica"
                alt="Impresión Flexográfica"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#121212]/50 backdrop-blur-sm">
                <Printer className="h-16 w-16 sm:h-20 sm:w-20 text-[#D35400] opacity-80" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-[#D35400]">
                Maquinaria de última generación
              </h3>
              <p className="text-[#9CA3AF] mb-4 md:mb-6 text-sm sm:text-base">
                Contamos con equipos de impresión flexográfica de última
                generación que nos permiten ofrecer resultados excepcionales en
                términos de definición, registro y reproducción cromática.
              </p>
              <ul className="space-y-3 md:space-y-4 text-sm sm:text-base text-[#9CA3AF]">
                <li className="flex items-start">
                  <span className="text-[#D35400] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Impresoras flexográficas multicuerpo:
                    </span>{" "}
                    Permiten la impresión de hasta 10 colores en una sola
                    pasada, garantizando un registro perfecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D35400] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Sistemas de control automático:
                    </span>{" "}
                    Monitoreo constante de la calidad durante todo el proceso de
                    impresión.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D35400] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Tecnología de secado UV:
                    </span>{" "}
                    Permite trabajar con materiales especiales y garantiza un
                    secado inmediato para un acabado perfecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D35400] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Capacidad de producción:
                    </span>{" "}
                    Nuestras instalaciones nos permiten atender proyectos de
                    cualquier volumen, desde pequeñas tiradas hasta grandes
                    producciones.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-[#E30613] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Un Mundo de Colores para Potenciar tu Marca
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-base sm:text-lg text-[#9CA3AF]">
              Aplicamos la mejor tecnología en control de color para garantizar
              una variedad infinita de tonalidades que reflejen la identidad de
              cada marca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-[#121212] border-[#27272A] overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E30613] via-[#D35400] to-[#ED7D00] opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-white">
                  Gestión de Color Avanzada
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Utilizamos sistemas de gestión de color calibrados que
                  garantizan la consistencia cromática en todas las etapas del
                  proceso, desde el diseño hasta la impresión final.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-[#27272A] overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-white">
                  Tintas Especiales
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Trabajamos con tintas especiales como metalizadas,
                  fluorescentes y de seguridad, que permiten crear efectos
                  únicos y diferenciadores para tu producto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-[#27272A] overflow-hidden sm:col-span-2 md:col-span-1">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Settings className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-white">
                  Control de Calidad Cromática
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Realizamos controles de calidad cromática durante todo el
                  proceso de producción, asegurando que los colores de tu marca
                  se reproduzcan con total fidelidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-[#18181B]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-[#E30613] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Precisión y Exactitud en el Servicio
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-[#ED7D00]">
                Tecnología avanzada para resultados perfectos
              </h3>
              <p className="text-[#9CA3AF] mb-4 md:mb-6 text-sm sm:text-base">
                Utilizamos tecnología avanzada para asegurar etiquetas con
                tolerancias mínimas y ajuste perfecto a cada envase. Nuestros
                sistemas de control de calidad garantizan que cada etiqueta
                cumpla con las especificaciones exactas requeridas por cada
                cliente.
              </p>
              <ul className="space-y-3 md:space-y-4 text-sm sm:text-base text-[#9CA3AF]">
                <li className="flex items-start">
                  <span className="text-[#ED7D00] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Sistemas de registro de alta precisión:
                    </span>{" "}
                    Garantizan una alineación perfecta de todos los colores y
                    elementos de la etiqueta.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED7D00] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Control dimensional automatizado:
                    </span>{" "}
                    Asegura que cada etiqueta cumpla con las dimensiones exactas
                    requeridas.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED7D00] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Inspección visual automatizada:
                    </span>{" "}
                    Detecta cualquier imperfección o desviación durante el
                    proceso de producción.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED7D00] mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">
                      Ajuste perfecto a cada envase:
                    </span>{" "}
                    Nuestras etiquetas se adaptan perfectamente a la forma y
                    tamaño de cada envase, garantizando una aplicación
                    impecable.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl shadow-[#ED7D00]/10 mt-6 md:mt-0">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Precisión+y+Exactitud"
                alt="Precisión y Exactitud"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#121212]/50 backdrop-blur-sm">
                <Ruler className="h-16 w-16 sm:h-20 sm:w-20 text-[#ED7D00] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-[#E30613] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Versatilidad: Soluciones Personalizadas
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-base sm:text-lg text-[#9CA3AF]">
              Ofrecemos soluciones personalizadas para cada producto, con
              etiquetas adaptadas a distintos mercados y necesidades. Nuestras
              opciones de diferenciación maximizan el impacto visual y
              comunicacional de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="bg-[#121212] border-[#27272A]">
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Industria+Alimenticia"
                  alt="Industria Alimenticia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Industria Alimenticia
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Etiquetas resistentes a la humedad, bajas temperaturas y
                  grasas, cumpliendo con todas las normativas del sector.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-[#27272A]">
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Sector+Farmacéutico"
                  alt="Sector Farmacéutico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Sector Farmacéutico
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Etiquetas de alta precisión con elementos de seguridad y
                  trazabilidad, cumpliendo con estrictas normativas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-[#27272A]">
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Bebidas+y+Vinos"
                  alt="Bebidas y Vinos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Bebidas y Vinos
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Etiquetas premium con acabados especiales como stamping,
                  relieves y barnizados que destacan la calidad del producto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-[#27272A]">
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Cosmética"
                  alt="Cosmética"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Cosmética
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-[#9CA3AF]">
                  Etiquetas de alto impacto visual con acabados metalizados,
                  holográficos y texturas que transmiten exclusividad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-[#E30613]/20 via-[#D35400]/20 to-[#121212]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            ¿Listo para potenciar tu producto?
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] mb-6 md:mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está preparado para ayudarte a encontrar
            la solución perfecta para tus necesidades. Contáctanos hoy mismo y
            descubre cómo podemos llevar tu producto al siguiente nivel.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-[#E30613]/70 hover:bg-[#E30613]/80 text-white"
              asChild
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
