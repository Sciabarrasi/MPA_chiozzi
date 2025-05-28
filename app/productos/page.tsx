"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhatsAppButton from "../components/whatsapp-button";

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0">
          <Image
            src="/chiozzi_productos_0014.png"
            alt="Fondo Nuestra Empresa"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones de Etiquetado Premium
            </h1>
            <p className="text-xl text-white mb-8">
              En Ind. Gráfica Eduardo Chiozzi, nos especializamos en ofrecer
              soluciones de etiquetado de alta calidad para empresas que buscan
              destacar sus productos en el mercado. Nuestras tecnologías
              avanzadas y materiales premium garantizan resultados excepcionales
              para todo tipo de industrias.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-primary/70 text-white hover:bg-primary/90 hover:text-white hover:border-primary transition-colors"
                asChild
              >
                <Link href="/contacto">Solicitar presupuesto</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-primary shadow-lg shadow-primary/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">
                Innovación Constante
              </h2>
              <p className="text-text-secondary">
                Invertimos continuamente en las últimas tecnologías para ofrecer
                soluciones de etiquetado que cumplen con los estándares más
                exigentes del mercado.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-secondary shadow-lg shadow-secondary/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">
                Calidad Garantizada
              </h2>
              <p className="text-text-secondary">
                Cada producto que sale de nuestras instalaciones pasa por
                rigurosos controles de calidad para asegurar la satisfacción
                total de nuestros clientes.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-highlight shadow-lg shadow-highlight/10 hover:bg-background/70 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">
                Soluciones Personalizadas
              </h2>
              <p className="text-text-secondary">
                Entendemos que cada cliente tiene necesidades únicas, por eso
                ofrecemos soluciones adaptadas a los requerimientos específicos
                de cada proyecto.
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
              <h2 className="text-3xl font-bold">
                NUESTRAS LÍNEAS DE PRODUCTOS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-[#E30613]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#E30613]/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <div
                  id="autoadhesivas-material-opp-blanco"
                  className="absolute inset-0"
                >
                  <Image
                    src="/chiozzi_productos_0014.png"
                    alt="Etiquetas Autoadhesivas OPP Blanco"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#E30613] transition-colors flex items-center">
                  Etiquetas Autoadhesivas
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Impresión de alta calidad para todo tipo de productos y
                  superficies. Disponible en diferentes materiales para
                  adaptarse a tus necesidades específicas, desde etiquetas para
                  productos premium hasta aplicaciones que requieren durabilidad
                  y resistencia.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-[#E30613] p-0 flex items-center"
                    >
                      Ver más detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] bg-[#121212] border-[#27272A] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-[#E30613]">
                        Etiquetas Autoadhesivas
                      </DialogTitle>
                      <DialogDescription className="text-[#9CA3AF] pt-2">
                        Información detallada sobre nuestras etiquetas
                        autoadhesivas
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md mb-4">
                        <div
                          id="dialog-autoadhesivas-material-opp-blanco"
                          className="absolute inset-0"
                        >
                          <Image
                            src="/chiozzi_productos_0014.png"
                            alt="Etiquetas Autoadhesivas OPP Blanco"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        Aplicaciones:
                      </h3>
                      <p className="text-[#9CA3AF] mb-4">
                        Ideales para productos alimenticios, bebidas,
                        cosméticos, farmacéuticos, químicos, industriales y
                        cualquier producto que requiera etiquetado de alta
                        calidad y dura.
                      </p>

                      <h3 className="text-lg font-semibold mb-2">
                        Materiales:
                      </h3>
                      <ul className="list-disc pl-5 text-[#9CA3AF] space-y-1 mb-4">
                        <li>
                          <span className="underline">Papel Ilustración:</span>{" "}
                          Adaptabilidad y flexibilidad, impresión de alta
                          definición y versatilidad en aplicaciones.
                          <br />
                          <span className="underline">Opciones:</span> MATE -
                          BRILLANTE - SEMIGLOSS
                        </li>
                        <br />
                        <li>
                          <span className="underline">
                            OPP Polipropileno Orientado:
                          </span>{" "}
                          Material plástico autoadhesivo que se caracteriza por
                          su resistencia al agua, a la abrasión y a la
                          intemperie. Es ideal para hacer etiquetas para
                          envases, productos alimenticios, farmacéuticos, entre
                          otros.
                          <br />
                          <span className="underline">Opciones:</span> OPP
                          Blanco - OPP Transparente - OPP Metalizado
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-[#D35400]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D35400]/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <div
                  id="no-autoadhesivas-material-colgantes"
                  className="absolute inset-0"
                >
                  <Image
                    src="/chiozzi_productos_0310.png"
                    alt="Etiquetas Colgantes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#D35400] transition-colors flex items-center">
                  Etiquetas No Autoadhesivas
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Soluciones personalizadas con acabados premium y materiales
                  especiales. Perfectas para packaging de lujo, etiquetas
                  colgantes y aplicaciones donde se busca un acabado distintivo.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-[#D35400] p-0 flex items-center"
                    >
                      Ver más detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] bg-[#121212] border-[#27272A] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-[#D35400]">
                        Etiquetas No Autoadhesivas
                      </DialogTitle>
                      <DialogDescription className="text-[#9CA3AF] pt-2">
                        Información detallada sobre nuestras etiquetas no
                        autoadhesivas
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md mb-4">
                        <div
                          id="dialog-no-autoadhesivas-material-colgantes"
                          className="absolute inset-0"
                        >
                          <Image
                            src="/chiozzi_productos_0310.png"
                            alt="Etiquetas Colgantes"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        Aplicaciones:
                      </h3>
                      <p className="text-[#9CA3AF] mb-4">
                        Perfectas para productos premium, ropa y accesorios,
                        packaging de lujo, productos artesanales, y cualquier
                        aplicación que requiera una presentación distintiva.
                      </p>

                      <h3 className="text-lg font-semibold mb-2">
                        Materiales:
                      </h3>
                      <ul className="list-disc pl-5 text-[#9CA3AF] space-y-1 mb-4">
                        <li>
                          <span className="underline">
                            Alto Impacto (HIPP):
                          </span>{" "}
                          Alta resistencia al contraste de temperaturas, ideal
                          para contacto con alimentos.
                        </li>
                        <br />
                        <li>
                          <span className="underline">Wrap Around:</span>{" "}
                          Resistente al agua y refrigeración, proporcionando una
                          mayor transparencia.
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-[#ED7D00]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#ED7D00]/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <div
                  id="flowpack-material-alimentos"
                  className="absolute inset-0"
                >
                  <Image
                    src="/chiozzi_productos_0140.png"
                    alt="Flowpack para Alimentos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#ED7D00] transition-colors flex items-center">
                  Flowpack
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Tecnología de última generación para resultados excepcionales.
                  Soluciones de envasado flexible para alimentos, productos
                  farmacéuticos y otros artículos que requieren protección y
                  presentación de alta calidad.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-[#ED7D00] p-0 flex items-center"
                    >
                      Ver más detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] bg-[#121212] border-[#27272A] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-[#ED7D00]">
                        Flowpack
                      </DialogTitle>
                      <DialogDescription className="text-[#9CA3AF] pt-2">
                        Información detallada sobre nuestras soluciones Flowpack
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md mb-4">
                        <div
                          id="dialog-flowpack-material-alimentos"
                          className="absolute inset-0"
                        >
                          <Image
                            src="/chiozzi_productos_0140.png"
                            alt="Flowpack para Alimentos"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        Aplicaciones:
                      </h3>
                      <p className="text-[#9CA3AF] mb-4">
                        Solución de packaging integral fabricado con
                        polipropileno biorientado (BOPP), un material flexible,
                        ligero y resistente que prolonga la vida útil de los
                        productos al actuar como barrera contra factores
                        externos.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">TERMINACIONES</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/terminacion_barniz.png"
                  alt="Terminaciones Premium"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors flex items-center">
                  Barniz
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Un detalle que marca la diferencia. El barniz se aplica sobre
                  la impresión para proteger y realzar el diseño, añadiendo un
                  acabado profesional a tus etiquetas.
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium">
                    Opciones disponibles:
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-gray-300">Mate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-gray-300">Brillante</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-highlight/30 transition-all duration-300 hover:shadow-lg hover:shadow-highlight/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/terminacion-secotrizado.png"
                  alt="Terminaciones Funcionales"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-highlight transition-colors flex items-center">
                  Secotrizado
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Combinación de barnices mate y brilloso para resaltar detalles
                  específicos en el diseño. Esta técnica crea un contraste
                  visual y táctil que añade sofisticación a tus etiquetas.
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium">
                    Aplicaciones ideales:
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-highlight"></span>
                    <span className="text-gray-300">Etiquetas premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-highlight"></span>
                    <span className="text-gray-300">Packaging de lujo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/laminado_chiozzi.png"
                  alt="Terminaciones Laminado"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-secondary transition-colors flex items-center">
                  Laminado
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Una capa extra de protección que además aporta un acabado
                  visual increíble. Ideal para productos expuestos a condiciones
                  exigentes o manipulación frecuente.
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium">
                    Opciones disponibles:
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="text-gray-300">Mate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="text-gray-300">Brillante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-background py-4">
        <div className="container mx-auto">
          <div className="h-1 bg-primary rounded-full w-4/5 mx-auto"></div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">DETALLES ESPECIALES</h2>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:grid-flow-row lg:auto-rows-fr">
              <div className="group relative overflow-hidden rounded-xl bg-background border border-zinc-800/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/stamping_chiozzi.png`}
                    alt="Stamping"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    Stamping
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/80 transition-colors">
                    Aplicación de láminas metálicas en frío sobre la etiqueta
                    para destacar elementos clave y asociarse con lujo y
                    exclusividad.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-background border border-zinc-800/50 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/troquelados_chiozzi.png`}
                    alt="Troquelados"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors">
                    Troquelados
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/80 transition-colors">
                    Troquelados a medida, que se adaptan a tu envase.
                    Creatividad y funcionalidad en el diseño de etiquetas.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-background border border-zinc-800/50 transition-all duration-300 hover:border-highlight/50 hover:shadow-lg hover:shadow-highlight/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/microcortes_chiozzi.png`}
                    alt="Microcortes de Seguridad"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-highlight transition-colors">
                    Microcortes de Seguridad
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/80 transition-colors">
                    Evitá manipulaciones, asegurando la integridad y
                    autenticidad del producto.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              <div className="group relative overflow-hidden rounded-xl bg-background border border-zinc-800/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/sectorizadas_chiozzi.png`}
                    alt="Impresiones Sectorizadas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    Impresiones Sectorizadas
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/80 transition-colors">
                    Zonas específicas dentro de la etiqueta donde no aplicamos
                    barniz ni protección, dejando ese espacio listo para que
                    puedas imprimir, por ejemplo: fechas de vencimiento, lotes,
                    códigos, o cualquier dato variable que tu producto necesite.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-background border border-zinc-800/50 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/sobre_adhesivo_chiozzi.png`}
                    alt="Impresión Sobre Adhesivo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors">
                    Impresión Sobre Adhesivo
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/80 transition-colors">
                    Mayor espacio para información adicional en el producto.
                  </p>
                </div>
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
              <h2 className="text-3xl font-bold">
                ¿POR QUÉ ELEGIR NUESTROS PRODUCTOS?
              </h2>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Alta Calidad</h3>
              <p className="text-text-secondary">
                Utilizamos materiales premium y tecnologías de vanguardia para
                garantizar productos de la más alta calidad.
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
                Nuestros procesos optimizados nos permiten ofrecer tiempos de
                entrega más rápidos que la competencia.
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
              <h3 className="text-xl font-semibold mb-3">
                Personalización Total
              </h3>
              <p className="text-text-secondary">
                Adaptamos cada producto a tus necesidades específicas, desde el
                diseño hasta los materiales y acabados.
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tecnología Avanzada
              </h3>
              <p className="text-text-secondary">
                Utilizamos equipos de última generación para garantizar
                impresiones de alta definición y colores vibrantes.
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
              <h3 className="text-xl font-semibold mb-3">
                Asesoramiento Experto
              </h3>
              <p className="text-text-secondary">
                Nuestro equipo de profesionales te guiará para encontrar la
                mejor solución para tu proyecto.
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
              <h3 className="text-xl font-semibold mb-3">
                Precios Competitivos
              </h3>
              <p className="text-text-secondary">
                Ofrecemos la mejor relación calidad-precio del mercado, con
                opciones para diferentes presupuestos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitás una solución personalizada?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la
            solución perfecta para tus necesidades de etiquetado y packaging.
          </p>
          <Button className="bg-primary/70 hover:bg-primary/80 text-white">
            <Link href="/contacto">Contactanos</Link>
          </Button>
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
