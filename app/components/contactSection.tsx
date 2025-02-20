import type React from "react"
import { Button } from "@/components/ui/button"

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">¿Listo para comenzar?</h2>
        <p className="text-text-secondary mb-8">
          Contáctenos para discutir su <span className="text-highlight font-semibold">próximo proyecto</span>
        </p>
        <Button className="bg-highlight hover:bg-highlight/90 text-white px-8 py-6 text-lg">Contactar</Button>
      </div>
    </section>
  )
}

export default ContactSection

