import type React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40">[IMAGEN AQUÍ]</div>
      <div className="relative container mx-auto px-4 pt-40">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Eduardo Chiozzi S.A</h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-text-secondary">
          Más de <span className="text-highlight font-semibold">25 años de trayectoria</span> nos han convertido en
          referentes en impresión flexográfica de alta calidad. En Chiozzi, combinamos{" "}
          <span className="text-highlight font-semibold">
            tecnología avanzada, innovación constante y un equipo altamente capacitado
          </span>{" "}
          para brindar soluciones gráficas a medida. Somos la elección de industrias que buscan precisión, durabilidad y
          excelencia en cada impresión.
        </p>
      </div>
    </section>
  )
}

export default HeroSection

