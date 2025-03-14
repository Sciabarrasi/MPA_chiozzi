import Image from "next/image"
import { Play, Award, FileCheck, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function NuestraEmpresaPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Empresa</h1>
            <p className="text-lg text-text-secondary mb-8">
              Conoce la historia, valores y el equipo detrás de Chiozzi, una empresa con más de 30 años de experiencia
              en la industria gráfica, comprometida con la calidad y la innovación constante.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Historia y Trayectoria</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Una historia con futuro</h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Nuestra empresa, ubicada en la ciudad de Gálvez, fue creada en el año 1992 por el actual presidente
                  del Directorio, Eduardo Chiozzi, quien cuenta con más de 40 años de trayectoria en la rama gráfica, en
                  principio como directivo de una reconocida empresa gráfica familiar fundada en 1911.
                </p>
                <p>
                  Siendo pioneros en la región, hace más de 30 años realizamos impresiones flexográficas de alta calidad
                  para todo tipo de industrias alimenticias, frigoríficas, de bebidas, laboratorios farmacéuticos y
                  cosméticos, pinturas y lubricantes.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-primary/70 hover:bg-primary/80 text-white">
                  Conocer más sobre nuestra historia
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-primary/10">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Imágen de Chiozzi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-semibold">Desde 1992</p>
                <p className="text-text-secondary">Más de 30 años de excelencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Video Institucional</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center">
              {/* EMBED VIDEO ACÁ */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full border-2 border-primary/70 bg-background/30 backdrop-blur-sm"
                >
                  <Play className="h-8 w-8 text-primary" />
                </Button>
              </div>
              <p className="text-text-secondary">Video institucional de Chiozzi</p>
            </div>
            <p className="text-center text-text-secondary mt-4">
              Conoce nuestra planta, procesos y el equipo que hace posible ofrecer productos de la más alta calidad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Nuestro Equipo</h2>
            </div>
          </div>

          <p className="text-text-secondary text-center max-w-3xl mx-auto mb-12">
            Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia, que
            trabajan día a día para ofrecer soluciones de la más alta calidad a nuestros clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="bg-background border-zinc-800 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={`Miembro del equipo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Nombre Apellido</CardTitle>
                  <CardDescription className="text-primary">Cargo en la empresa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-sm">
                    Breve descripción del profesional, su experiencia y su rol dentro de la empresa.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Compromiso con la Calidad</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-primary shadow-lg shadow-primary/10 hover:bg-background/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Excelencia en Procesos</h3>
              </div>
              <p className="text-text-secondary">
                Implementamos rigurosos controles de calidad en cada etapa de nuestros procesos productivos,
                garantizando resultados excepcionales en todos nuestros productos.
              </p>
            </div>

            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-secondary shadow-lg shadow-secondary/10 hover:bg-background/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">Certificación ISO</h3>
              </div>
              <p className="text-text-secondary">
                Contamos con certificación ISO 9001, que avala nuestro compromiso con la mejora continua y la
                implementación de estándares internacionales de calidad.
              </p>
            </div>

            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-highlight shadow-lg shadow-highlight/10 hover:bg-background/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-highlight mr-3" />
                <h3 className="text-xl font-semibold">Sustentabilidad</h3>
              </div>
              <p className="text-text-secondary">
                Desarrollamos nuestras actividades con un fuerte compromiso con el medio ambiente, implementando
                prácticas sustentables en todos nuestros procesos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Certificación ISO</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Calidad certificada</h3>
              <p className="text-text-secondary mb-6">
                En Chiozzi, nos enorgullece contar con la certificación ISO 9001, que avala nuestro compromiso con la
                calidad y la mejora continua. Esta certificación garantiza que todos nuestros procesos cumplen con los
                más altos estándares internacionales.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Procesos estandarizados y documentados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mejora continua en todas las áreas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enfoque en la satisfacción del cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Auditorías periódicas para garantizar el cumplimiento</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-primary/70 hover:bg-primary/80 text-white">Ver certificación</Button>
              </div>
            </div>
            <div className="relative h-[300px] order-1 md:order-2 flex items-center justify-center bg-zinc-800/50 rounded-lg p-8">
              <Image
                src="/placeholder.svg?height=200&width=200&text=ISO 9001"
                alt="Certificación ISO 9001"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Políticas de Calidad y Sustentabilidad</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Política de Calidad</h3>
              <p className="text-text-secondary mb-6">
                Nuestra política de calidad se basa en el compromiso de satisfacer las necesidades y expectativas de
                nuestros clientes, ofreciendo productos y servicios de excelencia a través de la mejora continua de
                nuestros procesos.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cumplimiento de requisitos legales y reglamentarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Capacitación constante de nuestro personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Inversión en tecnología de vanguardia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Evaluación y mejora continua de procesos</span>
                </li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-highlight">Política de Sustentabilidad</h3>
              <p className="text-text-secondary mb-6">
                En Chiozzi, estamos comprometidos con el desarrollo sustentable, implementando prácticas que minimizan
                el impacto ambiental de nuestras operaciones y promueven el uso responsable de los recursos.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>Uso eficiente de recursos y energía</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>Gestión responsable de residuos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>Desarrollo de productos con menor impacto ambiental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>Concientización y capacitación en temas ambientales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            En Chiozzi, estamos siempre en búsqueda de talento que comparta nuestra pasión por la excelencia y la
            innovación. Envíanos tu CV y sé parte de una empresa líder en la industria.
          </p>
          <Button className="bg-primary/70 hover:bg-primary/80 text-white">Trabaja con nosotros</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

