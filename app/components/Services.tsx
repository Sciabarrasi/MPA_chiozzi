import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-12 pb-20" style={{ backgroundColor: "#18181B" }}>
      <hr
        className="w-[90%] md:w-[768px] max-w-[768px] mx-auto border-t-2 mt-[-40px] mb-8"
        style={{ borderColor: "#ED7D00" }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-center">
          <span className="mr-2" style={{ color: "#ED7D00" }}>
            |
          </span>
          SOLUCIONES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Etiquetas Autoadhesivas"
            description="Impresión de alta calidad para todo tipo de productos y superficies."
            imageUrl="/chiozzi-productos-0014.png"
          />
          <ServiceCard
            title="Etiquetas No Autoadhesivas"
            description="Soluciones personalizadas con acabados premium y materiales especiales."
            imageUrl="/chiozzi-productos-0310.png"
          />
          <ServiceCard
            title="Flowpack"
            description="Tecnología de última generación para resultados excepcionales."
            imageUrl="/chiozzi-productos-0140.png"
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
  <Card
    className="overflow-hidden border-none group transition-all duration-300 hover:shadow-lg rounded-lg relative"
    style={{ boxShadow: "hover:0 10px 15px -3px rgba(237, 125, 0, 0.2)" }}
  >
    <div className="relative h-80 w-full">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: "#ED7D00" }}>
          {title}
        </h3>
        <p className="text-gray-200">{description}</p>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href="/productos">
          <Button
            variant="outline"
            size="sm"
            className="text-white border-transparent transition-colors"
            style={{ backgroundColor: "rgba(237, 125, 0, 0.9)" }}
          >
            Ver producto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </Card>
)

export default ServicesSection

