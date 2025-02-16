import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="mb-6 text-2xl font-bold">CHIOZZI</div>
            <h3 className="text-primary font-semibold mb-4">Vanguardia, Tecnología e Innovación</h3>
            <p className="text-text-secondary">
              Poseemos las mejores soluciones en las áreas de Impresión de Etiquetas Autoadhesivas, Packaging y
              Outsourcing.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">|</span>
              Seguinos en:
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">|</span>
              Accesos Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-text-secondary hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/impresion" className="text-text-secondary hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/etiquetas" className="text-text-secondary hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/outsourcing" className="text-text-secondary hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-text-secondary hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">|</span>
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-text-secondary">Colectora Oeste 696 (1619), Garín, Pcia. Buenos Aires</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@chiozzi.com.ar" className="text-text-secondary hover:text-white transition-colors">
                  info@chiozzi.com.ar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+541234567890" className="text-text-secondary hover:text-white transition-colors">
                  +54 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-text-secondary text-sm text-center">
            Impresión de Etiquetas - Etiquetas Autoadhesivas - Etiquetas Personalizadas - Estampillado Fiscal -
            Impresión de Etiquetas Autoadhesivas - Etiquetas Autoadhesivas Personalizadas - Etiquetas Autoadhesivas A4 -
            Etiquetas Autoadhesivas para Frascos - Etiquetas Autoadhesivas para Botellas - Etiquetas Autoadhesivas
            Precios - Impresión Digital - Etiquetas Autoadhesivas en Rollo - Etiquetas Autoadhesivas OPP - Impresión de
            Etiquetas en Rollo - Impresión de Etiquetas Digital - Impresión Digital de Etiquetas - Etiquetas
            Autoadhesivas para Frascos de Vidrio - Etiquetas Autoadhesivas para Vinos - Etiquetas VOID
          </p>
        </div>

        <div className="mt-8 text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Eduardo Chiozzi S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

