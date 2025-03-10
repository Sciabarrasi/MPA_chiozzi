import type React from "react"
import Image from "next/image"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/bg-chiozzi_178.png"
          alt="Chiozzi Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 z-10"></div>
      </div>
      <div className="relative container mx-auto px-4 pt-40 z-20">
        <div className="bg-background/70 backdrop-blur-sm p-8 rounded-lg max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Eduardo Chiozzi S.A</h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Más de <span className="text-highlight font-semibold">25 años de trayectoria</span> nos han convertido en
            referentes en impresión flexográfica de alta calidad. En Chiozzi, combinamos{" "}
            <span className="text-highlight font-semibold">
              tecnología avanzada, innovación constante y un equipo altamente capacitado
            </span>{" "}
            para brindar soluciones gráficas a medida. Somos la elección de industrias que buscan precisión, durabilidad
            y excelencia en cada impresión.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

