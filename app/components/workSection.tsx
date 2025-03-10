import type React from "react"
import { BarChart2, Printer, Settings, Shield, Users, Zap } from "lucide-react"

const WorkForYouSection: React.FC = () => {
  return (
    <section className="pb-12 pt-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center text-center">
          <span className="text-primary mr-2">|</span>
          Trabajamos para Usted
        </h2>
        <p className="text-text-secondary max-w-3xl mb-16 mx-auto text-center">
          Nos especializamos en producir etiquetas de alta calidad.
          Siendo pioneros en la región hace más de 30 años realizamos impresiones flexográficas de alta calidad para todo tipo de industrias alimenticias, frigoríficas, de bebidas, laboratorios farmacéuticos y cosméticos, pinturas y lubricantes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <FeatureItem
            icon={<Printer className="w-8 h-8 text-highlight" />}
            title="Impresiones de Alta Calidad"
            description="Tecnología de última generación"
          />
          <FeatureItem
            icon={<Settings className="w-8 h-8 text-highlight" />}
            title="Soluciones a Medida"
            description="Personalización total de cada producto"
          />
          <FeatureItem
            icon={<Users className="w-8 h-8 text-highlight" />}
            title="Atención Personalizada"
            description="Equipo altamente capacitado a tu disposición"
          />
          <FeatureItem
            icon={<BarChart2 className="w-8 h-8 text-highlight" />}
            title="Control de Calidad"
            description="Procesos eficientes y controlados" //ver iso 9001
          />
          <FeatureItem
            icon={<Shield className="w-8 h-8 text-highlight" />}
            title="Entrega Rápida"
            description="Entregas en tiempo récord" //PREGUNTAR
          />
          <FeatureItem
            icon={<Zap className="w-8 h-8 text-highlight" />}
            title="Compromiso y Mejora Constante"
            description="Compromiso con la mejora y satisfacción del cliente"
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
    <div className="bg-background-alt p-4 rounded-lg mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </div>
)

export default WorkForYouSection

