"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10 min-h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>

        <div className="container mx-auto relative z-10 flex items-center justify-center h-full py-8">
          <div className="w-full max-w-lg">
            <Card className="bg-background/80 backdrop-blur-md border-zinc-800 p-2">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-white">Acceso Denegado</CardTitle>
                <CardDescription className="text-text-secondary">
                  No tienes acceso a esta parte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <p className="text-center text-white">Por favor, inicia sesión con las credenciales correctas para acceder a esta sección.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}