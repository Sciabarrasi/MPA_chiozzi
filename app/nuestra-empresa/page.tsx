import Image from "next/image"
import { Play, Award, FileCheck, Leaf, Download, Shield, Target, Users, Lightbulb } from "lucide-react"

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

      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Misión, Visión y Valores</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/60 backdrop-blur-md border-zinc-800 hover:bg-background/70 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">Misión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  En Industria Gráfica Eduardo Chiozzi S.A., con 32 años de experiencia en el rubro flexográfico y 40
                  años en el rubro offset, nos dedicamos a ofrecer soluciones de impresión de alta calidad que
                  satisfacen las necesidades y expectativas de nuestros clientes. Nos esforzamos constantemente por
                  innovar nuestros procesos y tecnologías para superar sus expectativas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-md border-zinc-800 hover:bg-background/70 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-white">Visión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Ser reconocidos como líderes en la industria de impresión, destacándonos por nuestra calidad,
                  innovación y compromiso con el servicio al cliente. Queremos expandir nuestra presencia en el mercado
                  latinoamericano, manteniendo siempre nuestro compromiso con la sostenibilidad y la mejora continua.
                  Buscamos dejar una huella positiva en cada cliente, impulsando su éxito a través de nuestras
                  soluciones de impresión.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-md border-zinc-800 hover:bg-background/70 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-highlight/20 p-2 rounded-full">
                    <Users className="h-5 w-5 text-highlight" />
                  </div>
                  <CardTitle className="text-xl text-white">Valores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Experiencia:</strong> 32 años de experiencia en flexografía y 40
                      años en offset.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Calidad:</strong> Compromiso con la excelencia en cada producto.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Innovación:</strong> Búsqueda constante de nuevas formas de
                      mejorar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Servicio al Cliente:</strong> Superamos las expectativas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Integridad:</strong> Honestidad y transparencia en todas nuestras
                      acciones.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Sostenibilidad:</strong> Compromiso con prácticas responsables.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                alt="Historia de Chiozzi"
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
              {/* Aquí se puede embeber el video real */}
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
                Contamos con certificación ISO 9001:2015, que avala nuestro compromiso con la mejora continua y la
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
              <h2 className="text-3xl font-bold">Certificación ISO 9001:2015</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Calidad certificada</h3>
              <p className="text-text-secondary mb-6">
                En septiembre de 2024 hemos logrado la certificación de nuestro Sistema de Gestión de Calidad bajo la
                Norma IRAM ISO 9001:2015, un logro que valida nuestro compromiso con la excelencia y la mejora continua.
              </p>
              <p className="text-text-secondary mb-6">
                Esta certificación internacional respalda la calidad de nuestros procesos en el desarrollo y producción
                de etiquetas autoadhesivas con impresión flexográfica en bobinas, garantizando eficiencia operativa y
                una mejora continua en todo lo que hacemos.
              </p>
              <h4 className="text-xl font-semibold mb-3">¿Qué significa esta certificación?</h4>
              <ul className="space-y-3 text-text-secondary mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Procesos más eficientes y controlados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mayor calidad en cada etiqueta que producimos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Un compromiso constante con la mejora continua y la satisfacción del cliente</span>
                </li>
              </ul>
              <p className="text-text-secondary mb-6">
                Este logro es el resultado del esfuerzo conjunto de un equipo apasionado por brindar siempre el mejor
                servicio y producto.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-primary/70 hover:bg-primary/80 text-white">Ver certificación</Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center bg-zinc-800/50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=ISO+9001"
                  alt="Certificación ISO 9001"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=150&width=150&text=IRAM"
                  alt="Certificación IRAM"
                  width={150}
                  height={150}
                  className="object-contain"
                />
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
              <h2 className="text-3xl font-bold">Políticas de Calidad y Sustentabilidad</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary">Política de Calidad</h3>
              </div>
              <p className="text-text-secondary mb-6">
                La dirección de Industria Gráfica Eduardo Chiozzi S.A. plantea como objetivo principal alcanzar la
                satisfacción del cliente, para lo cual se compromete a:
              </p>
              <ul className="space-y-3 text-text-secondary mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Proveer al cliente de los productos solicitados, cumpliendo con sus requisitos y los aplicables.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Incorporar este concepto en todas las actividades que se desarrollen en la empresa para lograr la
                    satisfacción del cliente.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Garantizar que cada integrante de la organización tenga los conocimientos necesarios para realizar
                    su trabajo con el grado de calidad requerido.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Fijar objetivos de calidad medibles según los requisitos aplicables pertinentes, observando su
                    evolución y estableciendo mejoras.
                  </span>
                </li>
              </ul>
              <p className="text-text-secondary mb-6">
                La organización también se compromete a mantener en práctica activa la política de calidad enunciada,
                revisándola periódicamente para mantenerla actualizada con los requerimientos del mercado y la sociedad.
              </p>
              <Button className="flex items-center gap-2 bg-primary/70 hover:bg-primary/80 text-white w-full sm:w-auto">
                <Download className="h-4 w-4" />
                Descargar Política de Calidad
              </Button>
            </div>

            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-highlight mr-3" />
                <h3 className="text-2xl font-semibold text-highlight">Política de Gestión Ambiental</h3>
              </div>
              <p className="text-text-secondary mb-6">
                El concepto de sostenibilidad ha estado presente en nuestros valores desde siempre. Contribuimos a la
                sostenibilidad mediante la aplicación de un sentido de responsabilidad y ética, incluyendo:
              </p>
              <ul className="space-y-3 text-text-secondary mb-6">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>Un firme compromiso con la prevención de la contaminación.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>La conservación del Medio Ambiente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>La promoción del ahorro y la eficiencia energética.</span>
                </li>
              </ul>
              <p className="text-text-secondary mb-6">
                Este compromiso se materializa a través de la integración del Medio Ambiente en el negocio, el
                desarrollo de actuaciones de gestión medioambiental y la promoción de la responsabilidad medioambiental
                en la sociedad.
              </p>
              <Button className="flex items-center gap-2 bg-highlight/70 hover:bg-highlight/80 text-white w-full sm:w-auto">
                <Download className="h-4 w-4" />
                <span className="whitespace-normal text-center">Descargar Política de Gestión Ambiental</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

