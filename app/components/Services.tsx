import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-12 pb-20 bg-background-alt">
      <hr className="w-[90%] md:w-[768px] max-w-[768px] mx-auto border-t-2 border-highlight mt-[-40px] mb-8" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-center">
          <span className="text-highlight mr-2">|</span>
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Etiquetas Autoadhesivas"
            description="Impresión de alta calidad para todo tipo de productos y superficies."
          />
          <ServiceCard
            title="Etiquetas Especiales"
            description="Soluciones personalizadas con acabados premium y materiales especiales."
          />
          <ServiceCard
            title="Impresión Flexográfica"
            description="Tecnología de última generación para resultados excepcionales."
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <Card className="bg-background border-none">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-4 text-highlight">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </CardContent>
  </Card>
)

export default ServicesSection

