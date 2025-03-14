"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // simulamos un envío exitoso después de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Formulario enviado", {
        description: "Nos pondremos en contacto contigo a la brevedad.",
      })

      // Resetea el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      })
    } catch (error) {
      if (error instanceof Error) {
        setError("Error desconocido. Por favor, intenta nuevamente.")
      }
    } finally {
      setIsSubmitting(false)

      if (error) {
        toast.error("Error al enviar", {
          description: error,
        })
      }
    }
  }

  const faqItems = [
    {
      pregunta: "¿Cuál es el tiempo de entrega promedio?",
      respuesta:
        "El tiempo de entrega varía según el tipo de producto y la cantidad solicitada. En general, nuestros tiempos de entrega oscilan entre 7 y 15 días hábiles desde la aprobación final del diseño.",
    },
    {
      pregunta: "¿Realizan envíos a todo el país?",
      respuesta:
        "Sí, realizamos envíos a todo el territorio nacional. Los costos y tiempos de envío varían según la localidad de destino.",
    },
    {
      pregunta: "¿Ofrecen muestras de sus productos?",
      respuesta:
        "Sí, podemos proporcionar muestras de nuestros productos para que puedas evaluar la calidad antes de realizar un pedido mayor. Consulta con nuestro equipo de ventas para más detalles.",
    },
    {
      pregunta: "¿Cuál es la cantidad mínima de pedido?",
      respuesta:
        "La cantidad mínima de pedido varía según el tipo de producto. Para etiquetas autoadhesivas, generalmente trabajamos con pedidos mínimos de 1000 unidades, pero esto puede variar según las especificaciones del proyecto.",
    },
    {
      pregunta: "¿Qué formatos de archivo aceptan para los diseños?",
      respuesta:
        "Aceptamos archivos en formato AI, PDF, EPS y PSD. Recomendamos que los archivos estén en alta resolución (300 dpi) y con las fuentes convertidas a curvas/trazos.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-white">
      <Toaster richColors position="top-center" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-lg text-text-secondary mb-8">
              Estamos aquí para responder tus consultas y ayudarte a encontrar la solución perfecta para tus
              necesidades. Ponte en contacto con nosotros y un especialista te atenderá a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Ponte en contacto</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Información de Contacto</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Dirección</h4>
                    <p className="text-text-secondary">Colectora Oeste 696 (1619), Garín, Pcia. Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Teléfono</h4>
                    <p className="text-text-secondary">+54 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-text-secondary">info@chiozzi.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Horario de Atención</h4>
                    <p className="text-text-secondary">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-text-secondary">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <Card className="bg-background-alt border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Formulario de Contacto</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium text-white">
                          Nombre completo <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Ingresa tu nombre"
                          required
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="telefono" className="text-sm font-medium text-white">
                          Teléfono
                        </label>
                        <Input
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Ingresa tu teléfono"
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="asunto" className="text-sm font-medium text-white">
                          Asunto <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="asunto"
                          name="asunto"
                          value={formData.asunto}
                          onChange={handleChange}
                          placeholder="Asunto de tu consulta"
                          required
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium text-white">
                        Mensaje <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        required
                        className="min-h-[150px] bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary/70 hover:bg-primary/80 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Enviar mensaje
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-background/40 backdrop-blur-sm border-zinc-800">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-zinc-700 last:border-0">
                      <AccordionTrigger className="text-xl font-semibold text-white hover:no-underline">
                        {item.pregunta}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary">{item.respuesta}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}