import type React from "react"
import Image from "next/image"
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
            imageUrl="/chiozzi_productos_0014.png"
          />
          <ServiceCard
            title="Etiquetas No Autoadhesivas"
            description="Soluciones personalizadas con acabados premium y materiales especiales."
            imageUrl="/chiozzi_productos_0310.png"
          />
          <ServiceCard
            title="Flowpack"
            description="Tecnología de última generación para resultados excepcionales."
            imageUrl="/chiozzi_productos_0142.png"
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({
  title,
  description,
  imageUrl,
}) => (
  <Card className="bg-background border-none">
    <CardContent className="p-6 flex flex-col items-center text-center bg-[#2A2A2A] rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-highlight">{title}</h3>
      <div className="relative w-full h-48 mb-6 overflow-hidden flex items-center justify-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover mx-auto"
        />
      </div>
      <p className="text-text-secondary">{description}</p>
    </CardContent>
  </Card>
)

export default ServicesSection

