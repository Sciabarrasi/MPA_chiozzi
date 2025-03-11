"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const links = [
    { href: "/nuestra-empresa", label: "Nuestra Empresa" },
    { href: "/productos", label: "Productos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-background-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-header.png"
              alt="Logo de Chiozzi"
              width={150}
              height={150}
              className="mr-2"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-text-secondary hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background-alt">
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}