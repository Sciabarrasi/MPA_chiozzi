import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="mb-6">
              <Image
                src="/Isotipo.png"
                alt="Logo de Chiozzi"
                width={230}
                height={230}
                className="mr-2"
              />
            </div>
            <p className="text-text-secondary">
              Soluciones innovadoras de impresión y etiquetado que elevan el
              valor de tu marca.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">|</span>
              Seguinos en:
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/igech"
                target="_blank"
                className="text-text-secondary hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/igechiozzi/"
                target="_blank"
                className="text-text-secondary hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/industria-gr%C3%A1fica-eduardo-chiozzi/posts/?feedView=all"
                target="_blank"
                className="text-text-secondary hover:text-white transition-colors"
              >
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
                <Link
                  href="/"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nuestra-empresa"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-text-secondary hover:text-white transition-colors"
                >
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
                <p className="text-text-secondary">
                  Mitre 901, Gálvez - Santa Fe
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@chiozzi.com.ar"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  info@echiozzi.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:(+ 54 9 3404) 653267"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  (03404) 481786
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="h-5 w-5 text-[#E30613] flex-shrink-0" />
                <Link
                  href="https://wa.me/5493404653267"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  (+54 9 3404) 653267
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-text-secondary text-sm text-center">
            Impresión de Etiquetas - Etiquetas Autoadhesivas - Etiquetas
            Personalizadas - Estampillado Fiscal - Impresión de Etiquetas
            Autoadhesivas - Etiquetas Autoadhesivas Personalizadas - Etiquetas
            Autoadhesivas A4 - Etiquetas Autoadhesivas para Frascos - Etiquetas
            Autoadhesivas para Botellas - Etiquetas Autoadhesivas Precios -
            Impresión Digital - Etiquetas Autoadhesivas en Rollo - Etiquetas
            Autoadhesivas OPP - Impresión de Etiquetas en Rollo - Impresión de
            Etiquetas Digital - Impresión Digital de Etiquetas - Etiquetas
            Autoadhesivas para Frascos de Vidrio - Etiquetas Autoadhesivas para
            Vinos - Etiquetas VOID
          </p>
        </div>

        <div className="mt-8 text-center text-text-secondary text-sm">
          <p>
            &copy; {new Date().getFullYear()} Eduardo Chiozzi S.A. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
