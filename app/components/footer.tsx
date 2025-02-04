import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background-alt text-text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Av. Ejemplo 1234, Buenos Aires, Argentina</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+541112345678" className="hover:text-white transition-colors">
                +54 11 1234-5678
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:contacto@chiozzi.com" className="hover:text-white transition-colors">
                contacto@chiozzi.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/chiozzi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com/chiozzi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/chiozzi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Eduardo Chiozzi S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

