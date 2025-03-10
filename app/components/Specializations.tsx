import type React from "react"
import Image from "next/image"

const SpecializationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-center">
            <span className="text-highlight mr-2">|</span>
            Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/chiozzi_042.png"
                alt="Especialidades Chiozzi"
                width={300}
                height={200}
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="space-y-6 self-center">
              <SpecializationItem
                number="01"
                title="Calidad Premium"
                description="Impresión de alta definición con colores vibrantes y acabados perfectos."
              />
              <SpecializationItem
                number="02"
                title="Innovación Constante"
                description="Tecnología de última generación y procesos optimizados."
              />
              <SpecializationItem
                number="03"
                title="Servicio Personalizado"
                description="Asesoramiento experto y soluciones a medida para cada cliente."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SpecializationItem: React.FC<{ number: string; title: string; description: string }> = ({
  number,
  title,
  description,
}) => (
  <div className="flex items-start gap-4">
    <span className="text-highlight text-xl">{number}</span>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  </div>
)

export default SpecializationsSection

