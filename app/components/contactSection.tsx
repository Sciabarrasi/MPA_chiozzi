import type React from "react"
import { Button } from "@/components/ui/button"

const ContactSection: React.FC = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#18181B" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">¿Listo para comenzar?</h2>
        <p className="mb-8" style={{ color: "#B0B0B0" }}>
          Contáctenos para discutir su{" "}
          <span className="font-semibold" style={{ color: "#ED7D00" }}>
            próximo proyecto
          </span>
        </p>
        <Button
          className="text-white px-8 py-6 text-lg"
          style={{ backgroundColor: "#ED7D00", hover: { backgroundColor: "rgba(237, 125, 0, 0.9)" } }}
        >
          Contactar
        </Button>
      </div>
    </section>
  )
}

export default ContactSection

