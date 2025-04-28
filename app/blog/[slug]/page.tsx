import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

// Datos de ejemplo para simular los posts que vendrán del dashboard
// traerse los datos de los posteos que hay en la base de datos
const blogPosts = [
  {
    id: 1,
    slug: "tendencias-etiquetado-2025",
    title: "Tendencias en Etiquetado para 2025",
    excerpt:
      "Descubre las tendencias más innovadoras en etiquetado que dominarán el mercado en 2025. Desde materiales sostenibles hasta tecnologías interactivas.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nLas tendencias más destacadas para 2025 incluyen:\n\n1. **Etiquetas Inteligentes**: Con tecnología NFC y QR avanzados que permiten una interacción sin precedentes con el consumidor.\n\n2. **Materiales Biodegradables**: Nuevos compuestos que se descomponen en menos de 3 meses sin dejar residuos tóxicos.\n\n3. **Tintas Reactivas**: Cambian de color según la temperatura o exposición a ciertos elementos, indicando frescura o autenticidad.\n\n4. **Realidad Aumentada**: Etiquetas que cobran vida a través de aplicaciones móviles, ofreciendo experiencias inmersivas.\n\n5. **Personalización Masiva**: Tecnologías que permiten personalizar cada etiqueta individualmente sin aumentar significativamente los costos.\n\nEstas innovaciones no solo mejoran la experiencia del usuario sino que también ofrecen nuevas oportunidades de marketing y control de calidad para las empresas. La inversión en estas tecnologías está creciendo exponencialmente, con un aumento del 45% respecto al año anterior.\n\nLas empresas que adopten estas tendencias tempranamente podrán diferenciarse significativamente en un mercado cada vez más competitivo.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nLos materiales sostenibles más prometedores incluyen:\n\n1. **Bioplásticos de Algas**: Derivados de algas marinas, estos materiales son completamente biodegradables y requieren mínimos recursos para su producción.\n\n2. **Papel de Piedra**: Fabricado a partir de residuos de canteras, no utiliza agua ni blanqueadores químicos en su producción.\n\n3. **Films Compostables**: Nuevas generaciones de films que se descomponen completamente en entornos de compostaje industrial en menos de 90 días.\n\n4. **Tintas Vegetales**: Elaboradas a partir de aceites vegetales, eliminan los compuestos orgánicos volátiles nocivos presentes en las tintas tradicionales.\n\n5. **Adhesivos Naturales**: Desarrollados a partir de proteínas vegetales, ofrecen una alternativa a los adhesivos sintéticos derivados del petróleo.\n\nLa implementación de estos materiales no solo beneficia al medio ambiente sino que también responde a la creciente demanda de los consumidores por productos más sostenibles. Estudios recientes muestran que el 73% de los consumidores están dispuestos a pagar más por productos con packaging ecológico.\n\nLas empresas pioneras en la adopción de estos materiales están experimentando un aumento en la fidelidad de sus clientes y una mejora significativa en su imagen de marca.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\n### Impresión Digital\n\n**Ventajas:**\n- Ideal para tiradas cortas y medianas\n- Sin costos de preimpresión (planchas, fotolitos)\n- Posibilidad de personalización variable\n- Tiempos de entrega más cortos\n- Mayor precisión en la reproducción de detalles finos\n\n**Desventajas:**\n- Mayor costo por unidad en tiradas largas\n- Limitaciones en ciertos colores especiales\n- Menor resistencia a la abrasión sin barnizados adicionales\n\n### Impresión Flexográfica\n\n**Ventajas:**\n- Más económica para tiradas largas\n- Excelente reproducción de colores planos\n- Mayor durabilidad y resistencia\n- Compatible con una amplia gama de sustratos\n- Posibilidad de usar tintas especiales (metálicas, fluorescentes)\n\n**Desventajas:**\n- Costos iniciales más altos (planchas, preimpresión)\n- Menos adecuada para detalles muy finos\n- Tiempos de preparación más largos\n- No rentable para tiradas cortas\n\n### ¿Cuándo elegir cada tecnología?\n\n**Elija impresión digital cuando:**\n- Necesite menos de 10,000 etiquetas\n- Requiera personalización variable\n- Tenga plazos de entrega ajustados\n- Necesite prototipos o muestras\n- Sus diseños incluyan degradados complejos o imágenes fotográficas\n\n**Elija impresión flexográfica cuando:**\n- Necesite más de 10,000 etiquetas\n- Sus diseños utilicen principalmente colores planos\n- Requiera alta durabilidad sin laminados adicionales\n- Necesite imprimir en materiales especiales o difíciles\n- Sus etiquetas estarán expuestas a condiciones extremas\n\nLa elección entre ambas tecnologías dependerá de sus necesidades específicas, presupuesto y aplicación final de las etiquetas.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\n### Transformando la Seguridad Alimentaria\n\nLas etiquetas inteligentes están revolucionando la forma en que monitoreamos la seguridad y frescura de los alimentos. Tecnologías como los indicadores tiempo-temperatura (TTI) pueden mostrar visualmente si un producto ha sido expuesto a temperaturas inadecuadas durante su transporte o almacenamiento.\n\nEstos sistemas utilizan reacciones químicas o enzimáticas que cambian de color cuando se rompe la cadena de frío, proporcionando una indicación clara y fácil de interpretar tanto para distribuidores como para consumidores.\n\n### Mejorando la Trazabilidad\n\nLa integración de códigos QR avanzados y tecnología NFC en las etiquetas permite:\n\n- Seguimiento en tiempo real de los productos desde la granja hasta la mesa\n- Verificación instantánea de la autenticidad del producto\n- Acceso a información detallada sobre origen, métodos de producción y certificaciones\n- Alertas automáticas en caso de retiradas de productos\n\n### Experiencia del Consumidor Mejorada\n\nMás allá de la seguridad, las etiquetas inteligentes están creando nuevas formas de interacción con los consumidores:\n\n- Información nutricional personalizada basada en restricciones dietéticas\n- Sugerencias de recetas y maridajes mediante realidad aumentada\n- Programas de fidelización integrados a través de escaneos de productos\n- Verificación de prácticas éticas y sostenibles\n\n### Casos de Éxito\n\nEmpresas como FreshTag han implementado etiquetas que monitorean los gases liberados durante la descomposición de alimentos, permitiendo conocer el estado real de frescura más allá de la fecha de caducidad impresa.\n\nPor otro lado, la cadena de supermercados GreenChoice ha implementado etiquetas NFC que permiten a los consumidores conocer la huella de carbono exacta de cada producto, resultando en un aumento del 27% en las ventas de productos con menor impacto ambiental.\n\n### El Futuro\n\nLa próxima generación de etiquetas inteligentes incluirá biosensores capaces de detectar patógenos específicos y contaminantes, añadiendo una capa adicional de seguridad a nuestro suministro alimentario.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\n### El Arte de la Primera Impresión\n\nEn el competitivo mercado del vino premium, donde las decisiones de compra a menudo se toman en segundos, la etiqueta se convierte en el embajador silencioso de la marca. Un diseño excepcional no solo atrae la atención inicial, sino que comunica la historia, valores y calidad del vino antes de que el corcho sea extraído.\n\n### Elementos Clave del Diseño Premium\n\n**1. Tipografía con Propósito**\n\nLa selección tipográfica debe equilibrar legibilidad con personalidad. Las bodegas premium tienden a favorecer:\n- Serif clásicas para transmitir tradición y herencia\n- Sans-serif minimalistas para vinos modernos e innovadores\n- Caligrafía personalizada para añadir exclusividad y artesanía\n\n**2. Paleta Cromática Estratégica**\n\nLos colores no son arbitrarios en el diseño de etiquetas premium:\n- Negros y dorados comunican lujo y exclusividad\n- Cremas y beiges evocan tradición y artesanía\n- Blancos minimalistas con acentos sutiles sugieren pureza y sofisticación\n\n**3. Técnicas de Producción Distintivas**\n\nLas etiquetas premium se distinguen por sus acabados especiales:\n- Estampado en caliente con láminas metálicas\n- Relieves táctiles que invitan al contacto\n- Barnices selectivos que crean contrastes sutiles\n- Troquelados personalizados que rompen con lo convencional\n- Papeles texturizados de alta calidad (algodón, lino, piedra)\n\n### Tendencias Actuales\n\n**Minimalismo Narrativo**\nReducción de elementos visuales al mínimo esencial, permitiendo que cada componente cuente una parte de la historia del vino.\n\n**Ilustraciones Artísticas Exclusivas**\nColaboraciones con artistas reconocidos para crear obras únicas que transforman la botella en una pieza de colección.\n\n**Transparencia Estratégica**\nUso de elementos transparentes que permiten ver el vino, integrándolo como parte del diseño mismo.\n\n**Sostenibilidad Elegante**\nMateriales ecológicos que no comprometen la estética premium, comunicando responsabilidad ambiental.\n\n### Casos de Éxito\n\n**Château Margaux 2015**\nPara conmemorar los 200 años de la bodega y honrar al fallecido arquitecto Norman Foster, quien diseñó sus bodegas, crearon una etiqueta especial completamente negra con detalles en oro, rompiendo con siglos de tradición pero manteniendo su elegancia característica.\n\n**Orin Swift Papillon**\nSu etiqueta presenta una fotografía vintage en blanco y negro de una mano tatuada, creando un contraste dramático entre lo clásico y lo contemporáneo que refleja perfectamente la filosofía de la bodega.\n\n**Penfolds g3**\nPara su vino de $3,000 por botella, desarrollaron una etiqueta con nueve capas de técnicas de impresión diferentes, incluyendo tintas termocromáticas que cambian con la temperatura de servicio ideal.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\nPraesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.\n\n### Panorama Regulatorio Global\n\nEl año 2025 marca un punto de inflexión en las normativas de etiquetado a nivel mundial, con nuevas regulaciones que buscan aumentar la transparencia, sostenibilidad y accesibilidad de la información para los consumidores.\n\n### Principales Cambios Normativos\n\n**1. Declaración de Impacto Ambiental Obligatoria**\n\nA partir de enero de 2025, los productos comercializados en la Unión Europea, Reino Unido, Canadá y partes de Asia deberán incluir:\n\n- Huella de carbono del producto y su empaque\n- Índice de reciclabilidad expresado en porcentaje\n- Certificación de cadena de suministro sostenible\n- Información sobre el fin de vida útil del envase\n\n**2. Etiquetado Digital Complementario**\n\nLas nuevas normativas establecen la obligatoriedad de proporcionar acceso a información extendida mediante:\n\n- Códigos QR vinculados a información completa del producto\n- Sistemas NFC para verificación de autenticidad\n- Bases de datos centralizadas de acceso público\n\nEsto permitirá mantener etiquetas físicas más limpias y concisas, mientras se garantiza el acceso a toda la información relevante.\n\n**3. Estandarización de Símbolos de Alérgenos**\n\nSe implementará un sistema universal de iconografía para alérgenos, reemplazando las actuales declaraciones textuales por símbolos estandarizados reconocibles en cualquier país, facilitando la identificación rápida independientemente del idioma del consumidor.\n\n**4. Declaración de Nanomateriales y Microplásticos**\n\nCualquier producto que contenga nanomateriales o microplásticos deberá declararlo explícitamente, con información sobre:\n\n- Tipo y concentración\n- Función en el producto\n- Posibles implicaciones para la salud y el medio ambiente\n\n### Impacto por Sectores\n\n**Industria Alimentaria**\n\nLas nuevas normativas exigirán información nutricional frontal mediante sistemas de semáforo ampliados, que incluirán no solo aspectos nutricionales sino también ambientales y éticos.\n\n**Sector Farmacéutico**\n\nDeberá implementar etiquetas en braille electrónico (e-braille) y códigos de audio para mejorar la accesibilidad, además de incluir información sobre la huella hídrica y energética de la producción.\n\n**Industria Cosmética**\n\nTendrá que detallar el origen exacto de cada ingrediente, con mapas de trazabilidad accesibles mediante códigos QR y declaración obligatoria de pruebas alternativas a la experimentación animal.\n\n### Preparación para el Cumplimiento\n\nLas empresas deberán:\n\n1. Auditar sus actuales sistemas de etiquetado\n2. Implementar tecnologías de trazabilidad avanzada\n3. Desarrollar infraestructura digital complementaria\n4. Capacitar al personal en las nuevas normativas\n5. Establecer sistemas de verificación y cumplimiento\n\nLas organizaciones que comiencen su adaptación ahora no solo evitarán sanciones sino que podrán convertir estos cambios en una ventaja competitiva, respondiendo a la creciente demanda de transparencia por parte de los consumidores.",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Normativas+Etiquetado",
    date: "15 de enero de 2025",
    readTime: "10 min",
    author: "Roberto Sánchez",
    category: "Regulación",
    tags: ["Normativas", "Legal", "Compliance"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Encontrar el post que coincide con el slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // Si no se encuentra el post, mostrar un mensaje
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post no encontrado</h1>
          <p className="mb-6">Lo sentimos, el artículo que buscas no existe o ha sido eliminado.</p>
          <Button asChild>
            <Link href="/blog">Volver al Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Función para convertir el texto con saltos de línea y markdown básico a JSX
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Detectar si es un encabezado
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.replace("### ", "")}
          </h3>
        )
      }

      // Detectar si es una lista con asteriscos
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n- ").map((item) => item.replace("- ", ""))
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{formatInlineMarkdown(item)}</li>
            ))}
          </ul>
        )
      }

      // Detectar si es una lista numerada
      if (paragraph.match(/^\d+\. /)) {
        const items = paragraph.split("\n").filter((item) => item.match(/^\d+\. /))
        return (
          <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
            {items.map((item, i) => {
              const content = item.replace(/^\d+\. /, "")
              return <li key={i}>{formatInlineMarkdown(content)}</li>
            })}
          </ol>
        )
      }

      // Párrafo normal
      return (
        <p key={index} className="mb-4 text-text-secondary leading-relaxed">
          {formatInlineMarkdown(paragraph)}
        </p>
      )
    })
  }

  // Función para formatear markdown inline (negritas, cursivas)
  const formatInlineMarkdown = (text: string) => {
    // Reemplazar **texto** con <strong>texto</strong>
    const withBold = text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 0 ? (
        part
      ) : (
        <strong key={i} className="text-white">
          {part}
        </strong>
      ),
    )

    // Aquí se podrían agregar más formatos como cursivas, enlaces, etc.

    return withBold
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section con imagen de portada */}
      <section className="pt-28 relative">
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      </section>

      {/* Contenido del Post */}
      <section className="py-12 px-4 -mt-20 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Botón volver */}
            <div className="mb-8">
              <Button variant="outline" size="sm" className="border-zinc-700" asChild>
                <Link href="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Blog
                </Link>
              </Button>
            </div>

            {/* Título y metadatos */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <span>•</span>
              <div>{post.author}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-800 text-text-secondary rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Contenido */}
            <div className="prose prose-invert prose-zinc max-w-none">{formatContent(post.content)}</div>

            {/* Separador */}
            <div className="my-12 border-t border-zinc-800"></div>

            {/* Autor */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Sobre el autor</h3>
              <p className="text-text-secondary">
                {post.author} es especialista en {post.category.toLowerCase()} con más de 10 años de experiencia en la
                industria del etiquetado y packaging. Ha colaborado con marcas líderes en el desarrollo de soluciones
                innovadoras.
              </p>
            </div>

            {/* Artículos relacionados */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Artículos relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(
                    (relatedPost) =>
                      relatedPost.id !== post.id &&
                      (relatedPost.category === post.category ||
                        relatedPost.tags.some((tag) => post.tags.includes(tag))),
                  )
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <div key={relatedPost.id} className="border border-zinc-800 rounded-lg overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.coverImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                        </h4>
                        <p className="text-text-secondary text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
