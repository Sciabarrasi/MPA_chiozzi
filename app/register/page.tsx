"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useRegister } from "../hooks/useRegister"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register, isLoading, error } = useRegister()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await register({ email, password })
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navbar */}
      <Navbar />

      {/* Register Section */}
      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10 min-h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>

        <div className="container mx-auto relative z-10 flex items-center justify-center h-full py-8">
          <div className="w-full max-w-lg">
            <Card className="bg-background/80 backdrop-blur-md border-zinc-800 p-2">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-white">Crear Cuenta</CardTitle>
                <CardDescription className="text-text-secondary">
                  Ingresa tus datos para registrarte en la plataforma
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                {error && (
                  <div className="bg-red-900/20 border border-red-900 text-red-400 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="nombre@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-zinc-800 border-zinc-700 pl-10 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-zinc-800 border-zinc-700 pl-10 pr-10 text-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">La contraseña debe tener al menos 6 caracteres</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary/70 hover:bg-primary/80 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
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
                        Creando cuenta...
                      </span>
                    ) : (
                      "Registrarse"
                    )}
                  </Button>

                  <div className="text-center text-sm text-text-secondary">
                    ¿Ya tienes una cuenta?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                      Iniciar sesión
                    </Link>
                  </div>
                </form>
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