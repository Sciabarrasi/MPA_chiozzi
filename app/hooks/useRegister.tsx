// hooks/useRegister.ts
import { useState } from "react"
import { useRouter } from "next/navigation"

type RegisterData = {
  name: string
  email: string
  password: string
}

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const register = async (data: RegisterData) => {
    setIsLoading(true)
    setError(null)

    try {
      if (!data.name || !data.email || !data.password) {
        throw new Error("Todos los campos son obligatorios")
      }

      if (data.password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres")
      }

      if (!data.email.includes("@")) {
        throw new Error("Por favor ingresa un email válido")
      }

      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Error en el registro")
      }

      router.push(`/login?registered=true&email=${encodeURIComponent(data.email)}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error durante el registro")
    } finally {
      setIsLoading(false)
    }
  }

  return { register, isLoading, error }
}
