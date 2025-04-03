import type React from "react"
import { CheckCircle, Clock, FileText, Zap, Users, DollarSign } from "lucide-react"

const WorkForYouSection: React.FC = () => {
  return (
    <section className="pb-12 pt-20" style={{ backgroundColor: "#18181B" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center text-center">
          <span className="mr-2" style={{ color: "#E30613" }}>
            |
          </span>
          TRABAJAMOS PARA USTED
        </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <FeatureItem
            icon={<CheckCircle className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Alta Calidad"
            description="Utilizamos materiales premium y tecnologías de vanguardia."
          />
          <FeatureItem
            icon={<Clock className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Entrega Rápida"
            description="Tiempos optimizados para satisfacer sus necesidades."
          />
          <FeatureItem
            icon={<FileText className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Personalización Total"
            description="Soluciones a medida para cada cliente."
          />
          <FeatureItem
            icon={<Zap className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Tecnología Avanzada"
            description="Equipos de última generación para resultados excepcionales."
          />
          <FeatureItem
            icon={<Users className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Asesoramiento Experto"
            description="Equipo especializado para guiar su proyecto."
          />
          <FeatureItem
            icon={<DollarSign className="w-8 h-8" style={{ color: "#ED7D00" }} />}
            title="Precios Competitivos"
            description="La mejor relación calidad-precio del mercado."
          />
        </div>
      </div>
    </section>
  )
}

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center">
    <div
      className="p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center"
      style={{ backgroundColor: "#18181B" }}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p style={{ color: "#B0B0B0" }}>{description}</p>
  </div>
)

export default WorkForYouSection

