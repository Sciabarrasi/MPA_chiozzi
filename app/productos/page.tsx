import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { ProductCard } from "../components/product-card"

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />


      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones de Etiquetado Premium</h1>
            <p className="text-lg text-text-secondary mb-8">
              En Chiozzi, nos especializamos en ofrecer soluciones de etiquetado de alta calidad para empresas que
              buscan destacar sus productos en el mercado. Nuestras tecnologías avanzadas y materiales premium
              garantizan resultados excepcionales para todo tipo de industrias.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary/70 hover:bg-primary/80 text-white">Solicitar presupuesto</Button>
              <Button variant="outline" className="border-primary/70 text-primary/80 hover:bg-primary/5">
                Ver catálogo completo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-primary shadow-lg shadow-primary/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">Innovación Constante</h2>
              <p className="text-text-secondary">
                Invertimos continuamente en las últimas tecnologías para ofrecer soluciones de etiquetado que cumplen
                con los estándares más exigentes del mercado.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-secondary shadow-lg shadow-secondary/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">Calidad Garantizada</h2>
              <p className="text-text-secondary">
                Cada producto que sale de nuestras instalaciones pasa por rigurosos controles de calidad para asegurar
                la satisfacción total de nuestros clientes.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-highlight shadow-lg shadow-highlight/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">Soluciones Personalizadas</h2>
              <p className="text-text-secondary">
                Entendemos que cada cliente tiene necesidades únicas, por eso ofrecemos soluciones adaptadas a los
                requerimientos específicos de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">¿Por qué elegir nuestros productos?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Alta Calidad</h3>
              <p className="text-text-secondary">
                Utilizamos materiales premium y tecnologías de vanguardia para garantizar productos de la más alta
                calidad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entrega Rápida</h3>
              <p className="text-text-secondary">
                Nuestros procesos optimizados nos permiten ofrecer tiempos de entrega más rápidos que la competencia.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
              <p className="text-text-secondary">
                Adaptamos cada producto a tus necesidades específicas, desde el diseño hasta los materiales y acabados.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tecnología Avanzada</h3>
              <p className="text-text-secondary">
                Utilizamos equipos de última generación para garantizar impresiones de alta definición y colores
                vibrantes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Asesoramiento Experto</h3>
              <p className="text-text-secondary">
                Nuestro equipo de profesionales te guiará para encontrar la mejor solución para tu proyecto.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Precios Competitivos</h3>
              <p className="text-text-secondary">
                Ofrecemos la mejor relación calidad-precio del mercado, con opciones para diferentes presupuestos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Nuestras Líneas de Productos</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Etiquetas Autoadhesivas"
              description="Impresión de alta calidad para todo tipo de productos y superficies. Ideales para botellas, envases, productos premium y aplicaciones que requieren durabilidad y resistencia."
              imageSrc="/chiozzi_productos_0014.png"
              imagePosition="0 25%"
              color="primary"
            />

            <ProductCard
              title="Etiquetas No Autoadhesivas"
              description="Soluciones personalizadas con acabados premium y materiales especiales. Perfectas para packaging de lujo, etiquetas colgantes y aplicaciones donde se busca un acabado distintivo."
              imageSrc="/chiozzi_productos_0310.png"
              imagePosition="50% 25%"
              color="secondary"
            />

            <ProductCard
              title="Flowpack"
              description="Tecnología de última generación para resultados excepcionales. Soluciones de envasado flexible para alimentos, productos farmacéuticos y otros artículos que requieren protección y presentación de alta calidad."
              imageSrc="/chiozzi_productos_0142.png"
              imagePosition="100% 25%"
              color="highlight"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Productos Destacados</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="bg-background border-zinc-800">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Producto destacado ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Producto Premium {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Solución de etiquetado especializada para necesidades específicas de la industria.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary/70 text-primary/80 hover:bg-primary/5">
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas una solución personalizada?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tus necesidades de
            etiquetado y packaging.
          </p>
          <Button className="bg-primary/70 hover:bg-primary/80 text-white">Contactar con un especialista</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

