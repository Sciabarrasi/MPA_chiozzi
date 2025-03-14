import Image from "next/image"
import Link from "next/link"
import { Palette, Printer, Layers, Ruler, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navbar (importada del componente existente) */}
      <Navbar />

      {/* Hero Section with Introduction */}
      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-lg text-text-secondary mb-8">
              En Chiozzi ofrecemos servicios integrales de alta calidad para todas tus necesidades de etiquetado y
              packaging. Desde el diseño hasta la impresión final, contamos con la tecnología y experiencia para
              garantizar resultados excepcionales.
            </p>
          </div>
        </div>
      </section>

      {/* Diseño y Preprensa */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Diseño y Preprensa</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Sistemas de vanguardia</h3>
              <p className="text-text-secondary mb-6">
                Nuestro departamento de diseño y preprensa cuenta con los sistemas más avanzados del mercado,
                permitiéndonos ofrecer soluciones de alta calidad que cumplen con los estándares más exigentes.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Software especializado:</span> Utilizamos las últimas
                    versiones de Adobe Creative Suite y software especializado para la industria gráfica.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Pruebas digitales certificadas:</span> Realizamos pruebas
                    de color certificadas que garantizan la fidelidad cromática en el producto final.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Asesoramiento técnico:</span> Nuestro equipo de diseñadores
                    y técnicos brinda asesoramiento especializado para optimizar cada proyecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Flujo de trabajo automatizado:</span> Contamos con un
                    sistema de flujo de trabajo que optimiza tiempos y garantiza la calidad en cada etapa del proceso.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-primary/10">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Diseño+y+Preprensa"
                alt="Diseño y Preprensa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <Palette className="h-20 w-20 text-primary opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impresión Flexográfica */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Impresión Flexográfica de Alta Calidad</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-secondary/10">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Impresión+Flexográfica"
                alt="Impresión Flexográfica"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <Printer className="h-20 w-20 text-secondary opacity-80" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Maquinaria de última generación</h3>
              <p className="text-text-secondary mb-6">
                Contamos con equipos de impresión flexográfica de última generación que nos permiten ofrecer resultados
                excepcionales en términos de definición, registro y reproducción cromática.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Impresoras flexográficas multicuerpo:</span> Permiten la
                    impresión de hasta 10 colores en una sola pasada, garantizando un registro perfecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Sistemas de control automático:</span> Monitoreo constante
                    de la calidad durante todo el proceso de impresión.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Tecnología de secado UV:</span> Permite trabajar con
                    materiales especiales y garantiza un secado inmediato para un acabado perfecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Capacidad de producción:</span> Nuestras instalaciones nos
                    permiten atender proyectos de cualquier volumen, desde pequeñas tiradas hasta grandes producciones.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Un mundo de colores */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Un Mundo de Colores para Potenciar tu Marca</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-text-secondary">
              Aplicamos la mejor tecnología en control de color para garantizar una variedad infinita de tonalidades que
              reflejen la identidad de cada marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-zinc-800 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-highlight opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Gestión de Color Avanzada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary">
                  Utilizamos sistemas de gestión de color calibrados que garantizan la consistencia cromática en todas
                  las etapas del proceso, desde el diseño hasta la impresión final.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-zinc-800 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Tintas Especiales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary">
                  Trabajamos con tintas especiales como metalizadas, fluorescentes y de seguridad, que permiten crear
                  efectos únicos y diferenciadores para tu producto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-zinc-800 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Settings className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Control de Calidad Cromática</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary">
                  Realizamos controles de calidad cromática durante todo el proceso de producción, asegurando que los
                  colores de tu marca se reproduzcan con total fidelidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Precisión y Exactitud */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Precisión y Exactitud en el Servicio</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-highlight">
                Tecnología avanzada para resultados perfectos
              </h3>
              <p className="text-text-secondary mb-6">
                Utilizamos tecnología avanzada para asegurar etiquetas con tolerancias mínimas y ajuste perfecto a cada
                envase. Nuestros sistemas de control de calidad garantizan que cada etiqueta cumpla con las
                especificaciones exactas requeridas por cada cliente.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-highlight mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Sistemas de registro de alta precisión:</span> Garantizan
                    una alineación perfecta de todos los colores y elementos de la etiqueta.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Control dimensional automatizado:</span> Asegura que cada
                    etiqueta cumpla con las dimensiones exactas requeridas.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Inspección visual automatizada:</span> Detecta cualquier
                    imperfección o desviación durante el proceso de producción.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 font-bold">•</span>
                  <div>
                    <span className="font-medium text-white">Ajuste perfecto a cada envase:</span> Nuestras etiquetas se
                    adaptan perfectamente a la forma y tamaño de cada envase, garantizando una aplicación impecable.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-highlight/10">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Precisión+y+Exactitud"
                alt="Precisión y Exactitud"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <Ruler className="h-20 w-20 text-highlight opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versatilidad */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Versatilidad: Soluciones Personalizadas</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-text-secondary">
              Ofrecemos soluciones personalizadas para cada producto, con etiquetas adaptadas a distintos mercados y
              necesidades. Nuestras opciones de diferenciación maximizan el impacto visual y comunicacional de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-zinc-800">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Industria+Alimenticia"
                  alt="Industria Alimenticia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Industria Alimenticia</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <CardDescription className="text-text-secondary">
                  Etiquetas resistentes a la humedad, bajas temperaturas y grasas, cumpliendo con todas las normativas
                  del sector.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary/70 text-primary/80 hover:bg-primary/5">
                  Ver ejemplos
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-background border-zinc-800">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Sector+Farmacéutico"
                  alt="Sector Farmacéutico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Sector Farmacéutico</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <CardDescription className="text-text-secondary">
                  Etiquetas de alta precisión con elementos de seguridad y trazabilidad, cumpliendo con estrictas
                  normativas.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary/70 text-primary/80 hover:bg-primary/5">
                  Ver ejemplos
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-background border-zinc-800">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Bebidas+y+Vinos"
                  alt="Bebidas y Vinos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Bebidas y Vinos</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <CardDescription className="text-text-secondary">
                  Etiquetas premium con acabados especiales como stamping, relieves y barnizados que destacan la calidad
                  del producto.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary/70 text-primary/80 hover:bg-primary/5">
                  Ver ejemplos
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-background border-zinc-800">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Cosmética"
                  alt="Cosmética"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Cosmética</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <CardDescription className="text-text-secondary">
                  Etiquetas de alto impacto visual con acabados metalizados, holográficos y texturas que transmiten
                  exclusividad.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary/70 text-primary/80 hover:bg-primary/5">
                  Ver ejemplos
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para potenciar tu producto?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está preparado para ayudarte a encontrar la solución perfecta para tus
            necesidades. Contáctanos hoy mismo y descubre cómo podemos llevar tu producto al siguiente nivel.
          </p>
          <div className="flex justify-center">
            <Button className="bg-primary/70 hover:bg-primary/80 text-white" asChild>
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer (importado del componente existente) */}
      <Footer />
    </div>
  )
}

