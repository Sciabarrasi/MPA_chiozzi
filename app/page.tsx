import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40">[IMAGEN AQUÍ]</div>
        <div className="relative container mx-auto px-4 pt-40">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Eduardo Chiozzi S.A</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-text-secondary">
            Más de 25 años de trayectoria nos han convertido en referentes en impresión flexográfica de alta calidad. En
            Chiozzi, combinamos tecnología avanzada, innovación constante y un equipo altamente capacitado para brindar
            soluciones gráficas a medida. Somos la elección de industrias que buscan precisión, durabilidad y excelencia
            en cada impresión.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-2">■</span>
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Etiquetas Autoadhesivas</h3>
                <p className="text-text-secondary">
                  Impresión de alta calidad para todo tipo de productos y superficies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Etiquetas Especiales</h3>
                <p className="text-text-secondary">
                  Soluciones personalizadas con acabados premium y materiales especiales.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Impresión Flexográfica</h3>
                <p className="text-text-secondary">Tecnología de última generación para resultados excepcionales.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-2">■</span>
            Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">[IMAGEN AQUÍ]</div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-primary text-xl">01</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
                  <p className="text-text-secondary">
                    Impresión de alta definición con colores vibrantes y acabados perfectos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-xl">02</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovación Constante</h3>
                  <p className="text-text-secondary">Tecnología de última generación y procesos optimizados.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-xl">03</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Servicio Personalizado</h3>
                  <p className="text-text-secondary">Asesoramiento experto y soluciones a medida para cada cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para comenzar?</h2>
          <p className="text-text-secondary mb-8">Contáctenos para discutir su próximo proyecto</p>
          <Button className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg">Contactar</Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

