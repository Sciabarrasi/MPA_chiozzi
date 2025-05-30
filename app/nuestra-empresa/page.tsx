import Image from "next/image";
import {
  Award,
  FileCheck,
  Leaf,
  Shield,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";
import WhatsAppButton from "../components/whatsapp-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { DownloadButton } from "../components/download-buttons";

export default function NuestraEmpresaPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0">
          <Image
            src="/nuestra-empresa-chiozzi.png"
            alt="Fondo Nuestra Empresa"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Nuestra Empresa</h1>
            <p className="text-lg md:text-xl text-white mb-6 md:mb-8 px-2">
              Conocé la historia, valores y el equipo detrás de Ind. Gráfica Eduardo Chiozzi, una empresa con más de 30
              años de experiencia, comprometida con la calidad y la innovación constante.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                MISIÓN, VISIÓN Y VALORES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-background border-zinc-800 hover:bg-background/90 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Target className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-white">
                    Misión
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-text-secondary">
                  En Industria Gráfica Eduardo Chiozzi S.A., con 32 años de
                  experiencia en el rubro flexográfico, nos dedicamos a ofrecer soluciones de impresión de
                  alta calidad que satisfacen las necesidades y expectativas de
                  nuestros clientes. Nos esforzamos constantemente por innovar
                  nuestros procesos y tecnologías para superar sus expectativas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-zinc-800 hover:bg-background/90 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-white">
                    Visión
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-text-secondary">
                  Ser reconocidos como líderes en la industria de impresión,
                  destacándonos por nuestra calidad, innovación y compromiso con
                  el servicio al cliente. Queremos expandir nuestra presencia en
                  el mercado latinoamericano, manteniendo siempre nuestro
                  compromiso con la sostenibilidad y la mejora continua.
                  Buscamos dejar una huella positiva en cada cliente, impulsando
                  su éxito a través de nuestras soluciones de impresión.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-zinc-800 hover:bg-background/90 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-highlight/20 p-2 rounded-full">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-highlight" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-white">
                    Valores
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base md:text-lg text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Experiencia:</strong> 32
                      años de experiencia en flexografía.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Calidad:</strong>{" "}
                      Compromiso con la excelencia en cada producto.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Innovación:</strong>{" "}
                      Búsqueda constante de nuevas formas de mejorar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">
                        Servicio al Cliente:
                      </strong>{" "}
                      Superamos las expectativas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Integridad:</strong>{" "}
                      Honestidad y transparencia en todas nuestras acciones.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-white">Sostenibilidad:</strong>{" "}
                      Compromiso con prácticas responsables.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                HISTORIA Y TRAYECTORIA
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-primary">
                Una historia con futuro
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-text-secondary">
                <p>
                  Nuestra empresa, ubicada en la ciudad de Gálvez, fue creada en
                  el año 1992 por el actual presidente del Directorio, Eduardo
                  Chiozzi, quien cuenta con más de 40 años de trayectoria en la
                  rama gráfica, en principio como directivo de una reconocida
                  empresa gráfica familiar fundada en 1911.
                </p>
                <p>
                  Siendo pioneros en la región, hace más de 30 años realizamos
                  impresiones flexográficas de alta calidad para todo tipo de
                  industrias alimenticias, frigoríficas, de bebidas,
                  laboratorios farmacéuticos y cosméticos, pinturas y
                  lubricantes.
                </p>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl shadow-primary/10 mt-6 md:mt-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50">
                <iframe
                  width="640"
                  height="400"
                  src="https://www.youtube.com/embed/mXAJu_xxoVY?si=9hjzVlZS9mWwT-HY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-1 bg-primary rounded-full w-full max-w-4xl mx-auto my-6 md:my-8"></div>
      </div>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">NUESTRO EQUIPO</h2>
            </div>
          </div>

          <p className="text-base md:text-lg text-text-secondary text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            Contamos con un equipo de profesionales altamente capacitados y
            comprometidos con la excelencia, que trabajan día a día para ofrecer
            soluciones de la más alta calidad a nuestros clientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "Comercial",
                description:
                  "Equipo capacitado para brindarte asesoramiento personalizado y encontrar la mejor solución según tus necesidades y volúmenes de producción.",
                image: "/comercial-chiozzi.png",
              },
              {
                title: "Administración",
                description:
                  "Profesionales dedicados a que todo funcione de forma ordenada y a tiempo. Nos ocupamos de la gestión de pedidos, facturación y logística interna.",
                image: "/administracion-chiozzi.png",
              },
              {
                title: "Preprensa",
                description:
                  "Expertos en transformar ideas en diseños listos para imprimir. Ajustamos colores, medidas y detalles para que en máquina todo salga perfecto.",
                image: "/preprensa_chiozzi.png",
              },
              {
                title: "Producción",
                description:
                  "Responsables de hacer que tus etiquetas cobren forma. Copiado, montaje e impresión con tecnología, precisión y experiencia.",
                image: "/produccion_chiozzi.png",
              },
              {
                title: "Control y Despacho",
                description:
                  "Equipo experto en controlar hasta el último detalle. Controlamos, empaquetamos, rotulamos y enviamos con el mismo cuidado con el que producimos.",
                image: "/control_despacho_chiozzi.png",
              },
            ].map((department, index) => (
              <Card
                key={index}
                className="bg-background border-zinc-800 overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl text-white">
                    {department.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                  <p className="text-text-secondary text-sm md:text-base">
                    {department.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                COMPROMISO CON LA CALIDAD
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-background p-4 md:p-6 rounded-lg border-l-4 border-primary shadow-lg shadow-primary/10 hover:bg-background/90 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-primary mr-2 md:mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Excelencia en Procesos
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary">
                Implementamos rigurosos controles de calidad en cada etapa de
                nuestros procesos productivos, garantizando resultados
                excepcionales en todos nuestros productos.
              </p>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-lg border-l-4 border-secondary shadow-lg shadow-secondary/10 hover:bg-background/90 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-secondary mr-2 md:mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Certificación ISO
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary">
                Contamos con certificación ISO 9001:2015, que avala nuestro
                compromiso con la mejora continua y la implementación de
                estándares internacionales de calidad.
              </p>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-lg border-l-4 border-highlight shadow-lg shadow-highlight/10 hover:bg-background/90 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <Leaf className="h-6 w-6 md:h-8 md:w-8 text-highlight mr-2 md:mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Sustentabilidad
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary">
                Desarrollamos nuestras actividades con un fuerte compromiso con
                el medio ambiente, implementando prácticas sustentables en todos
                nuestros procesos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                CERTIFICACIÓN ISO 9001:2015
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                Calidad certificada
              </h3>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                En septiembre de 2024 hemos logrado la certificación de nuestro
                Sistema de Gestión de Calidad bajo la Norma IRAM ISO 9001:2015,
                un logro que valida nuestro compromiso con la excelencia y la
                mejora continua.
              </p>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                Esta certificación internacional respalda la calidad de nuestros
                procesos en el desarrollo y producción de etiquetas
                autoadhesivas con impresión flexográfica en bobinas,
                garantizando eficiencia operativa y una mejora continua en todo
                lo que hacemos.
              </p>
              <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                ¿Qué significa esta certificación?
              </h4>
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-text-secondary mb-4 md:mb-6">
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
                  <span>
                    Un compromiso constante con la mejora continua y la
                    satisfacción del cliente
                  </span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                Este logro es el resultado del esfuerzo conjunto de un equipo
                apasionado por brindar siempre el mejor servicio y producto.
              </p>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center bg-zinc-800/50 rounded-lg p-6 md:p-8 mb-6 md:mb-0">
              <div className="relative order-1 md:order-2 flex items-center justify-center bg-zinc-800/50 rounded-lg p-6 md:p-8 mb-6 md:mb-0">
                <Image
                  src="/Logo_Iso_Iram_Blanco.png"
                  alt="Certificación ISO 9001"
                  width={350}
                  height={350}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                POLÍTICAS DE CALIDAD Y SUSTENTABILIDAD
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-background p-6 md:p-8 rounded-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mr-2 md:mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                  Política de Calidad
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                La dirección de Industria Gráfica Eduardo Chiozzi S.A. plantea
                como objetivo principal alcanzar la satisfacción del cliente,
                para lo cual se compromete a:
              </p>
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Proveer al cliente de los productos solicitados, cumpliendo
                    con sus requisitos y los aplicables.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Incorporar este concepto en todas las actividades que se
                    desarrollen en la empresa para lograr la satisfacción del
                    cliente.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Garantizar que cada integrante de la organización tenga los
                    conocimientos necesarios para realizar su trabajo con el
                    grado de calidad requerido.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Fijar objetivos de calidad medibles según los requisitos
                    aplicables pertinentes, observando su evolución y
                    estableciendo mejoras.
                  </span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                La organización también se compromete a mantener en práctica
                activa la política de calidad enunciada, revisándola
                periódicamente para mantenerla actualizada con los
                requerimientos del mercado y la sociedad.
              </p>
              <DownloadButton
                text="Descargar Política de Calidad"
                filePath="/docs/politica-de-calidad.pdf"
                fileName="Política de Caliad.pdf"
              />
            </div>

            <div className="bg-background p-6 md:p-8 rounded-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <Leaf className="h-6 w-6 md:h-8 md:w-8 text-highlight mr-2 md:mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold text-highlight">
                  Política de Gestión Ambiental
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                El concepto de sostenibilidad ha estado presente en nuestros
                valores desde siempre. Contribuimos a la sostenibilidad mediante
                la aplicación de un sentido de responsabilidad y ética,
                incluyendo:
              </p>
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>
                    Un firme compromiso con la prevención de la contaminación.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>La conservación del Medio Ambiente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>
                    La promoción del ahorro y la eficiencia energética.
                  </span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
                Este compromiso se materializa a través de la integración del
                Medio Ambiente en el negocio, el desarrollo de actuaciones de
                gestión medioambiental y la promoción de la responsabilidad
                medioambiental en la sociedad.
              </p>
              <DownloadButton
                text="Descargar Política Ambiental"
                files={[
                  {
                    path: "/docs/politica-de-gestion-ambiental-1.pdf",
                    name: "Parte 1 - Gestión Ambiental.pdf",
                  },
                  {
                    path: "/docs/politica-de-gestion-ambiental-2.pdf",
                    name: "Parte 2 - Gestión Ambiental.pdf",
                  },
                ]}
                className="bg-highlight/70 hover:bg-highlight/80 "
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton
        phoneNumber="(+ 54 9 3404) 653267"
        message="Hola, quisiera discutir mi próximo proyecto con ustedes !"
      />
      <Footer />
    </div>
  );
}
