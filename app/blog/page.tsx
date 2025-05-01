import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

// datos de ejemplo para simular los posts que vendrán de la base de datos
const blogPosts = [
  {
    id: 1,
    slug: "tendencias-etiquetado-2025",
    title: "Tendencias en Etiquetado para 2025",
    excerpt:
      "Descubre las tendencias más innovadoras en etiquetado que dominarán el mercado en 2025. Desde materiales sostenibles hasta tecnologías interactivas.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Tendencias+Etiquetado+2025",
    date: "15 de marzo de 2025",
    readTime: "5 min",
    author: "María González",
    category: "Tendencias",
    tags: ["Innovación", "Sostenibilidad", "Diseño"],
  },
  {
    id: 2,
    slug: "materiales-sostenibles-packaging",
    title: "Materiales Sostenibles para Packaging",
    excerpt:
      "Análisis de los materiales más sostenibles para packaging y etiquetado que están revolucionando la industria y ayudando al medio ambiente.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Materiales+Sostenibles",
    date: "2 de marzo de 2025",
    readTime: "7 min",
    author: "Carlos Rodríguez",
    category: "Sostenibilidad",
    tags: ["Ecológico", "Innovación", "Materiales"],
  },
  {
    id: 3,
    slug: "impresion-digital-vs-flexografica",
    title: "Impresión Digital vs. Flexográfica: ¿Cuál elegir?",
    excerpt:
      "Comparativa detallada entre la impresión digital y flexográfica para etiquetas. Ventajas, desventajas y casos de uso ideales para cada tecnología.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Digital+vs+Flexográfica",
    date: "20 de febrero de 2025",
    readTime: "8 min",
    author: "Laura Martínez",
    category: "Tecnología",
    tags: ["Impresión", "Comparativa", "Tecnología"],
  },
  {
    id: 4,
    slug: "etiquetas-inteligentes-industria-alimentaria",
    title: "Etiquetas Inteligentes en la Industria Alimentaria",
    excerpt:
      "Cómo las etiquetas inteligentes están revolucionando la trazabilidad, seguridad y experiencia del consumidor en la industria alimentaria.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Etiquetas+Inteligentes",
    date: "5 de febrero de 2025",
    readTime: "6 min",
    author: "Javier López",
    category: "Innovación",
    tags: ["Smart Labels", "Alimentos", "IoT"],
  },
  {
    id: 5,
    slug: "diseno-etiquetas-vino-premium",
    title: "Diseño de Etiquetas para Vinos Premium",
    excerpt:
      "Guía completa sobre el diseño de etiquetas para vinos premium. Elementos clave, tendencias y casos de éxito que han revolucionado el mercado.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Etiquetas+Vino+Premium",
    date: "28 de enero de 2025",
    readTime: "9 min",
    author: "Ana García",
    category: "Diseño",
    tags: ["Vinos", "Lujo", "Diseño"],
  },
  {
    id: 6,
    slug: "normativas-etiquetado-2025",
    title: "Nuevas Normativas de Etiquetado para 2025",
    excerpt:
      "Análisis de las nuevas normativas y regulaciones de etiquetado que entrarán en vigor en 2025 y cómo afectarán a diferentes industrias.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl...",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Normativas+Etiquetado",
    date: "15 de enero de 2025",
    readTime: "10 min",
    author: "Roberto Sánchez",
    category: "Regulación",
    tags: ["Normativas", "Legal", "Compliance"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BLOG</h1>
            <p className="text-lg text-text-secondary mb-8">
              Descubre las últimas tendencias, innovaciones y noticias sobre la industria del etiquetado y packaging.
              Compartimos conocimientos, casos de éxito y consejos para ayudarte a destacar tus productos en el mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">TODOS LOS ARTÍCULOS</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-background border-zinc-800 overflow-hidden flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/80 text-white px-2 py-1 rounded-full text-xs">{post.category}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <CardDescription className="text-text-secondary">
                    {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + "..." : post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="link" className="text-primary p-0 flex items-center" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

