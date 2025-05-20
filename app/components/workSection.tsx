import { Check, Clock, Users, Zap, DollarSign } from "lucide-react"

export default function WorkSection() {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-bold">TRABAJAMOS PARA TU EMPRESA</h2>
          </div>
        </div>

        <p className="mb-16 mx-auto text-center max-w-3xl" style={{ color: "#B0B0B0" }}>
          Nos especializamos en la producción de{" "}
          <span className="font-semibold" style={{ color: "#ED7D00" }}>
            etiquetas de alta calidad
          </span>{" "}
          para diversos sectores industriales. Nuestro compromiso con la{" "}
          <span className="font-semibold" style={{ color: "#ED7D00" }}>
            excelencia y la innovación
          </span>{" "}
          nos permite ofrecer soluciones personalizadas que satisfacen las necesidades específicas de cada cliente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Alta Calidad</h3>
            <p className="text-text-secondary">
              Utilizamos materiales premium y tecnologías de vanguardia para garantizar productos de la más alta
              calidad.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Entrega Rápida</h3>
            <p className="text-text-secondary">
              Nuestros procesos optimizados nos permiten ofrecer tiempos de entrega más rápidos que la competencia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
            <p className="text-text-secondary">
              Adaptamos cada producto a tus necesidades específicas, desde el diseño hasta los materiales y acabados.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tecnología Avanzada</h3>
            <p className="text-text-secondary">
              Utilizamos equipos de última generación para garantizar impresiones de alta definición y colores
              vibrantes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Asesoramiento Experto</h3>
            <p className="text-text-secondary">
              Nuestro equipo de profesionales te guiará para encontrar la mejor solución para tu proyecto.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Precios Competitivos</h3>
            <p className="text-text-secondary">
              Ofrecemos la mejor relación calidad-precio del mercado, con opciones para diferentes presupuestos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
