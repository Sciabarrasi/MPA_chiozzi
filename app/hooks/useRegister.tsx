// hooks/useRegister.ts
import { useState } from "react";
import { useRouter } from "next/navigation";

type RegisterData = {
  email: string;
  password: string;
};

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Validación básica
      if (!data.email || !data.password) {
        throw new Error("Email y contraseña son requeridos");
      }

      if (data.password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }

      // Validación simple de email
      if (!data.email.includes("@")) {
        throw new Error("Por favor ingresa un email válido");
      }

      // Llamada a la API
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      // Redirección con mensaje de éxito
      router.push(`/login?registered=true&email=${encodeURIComponent(data.email)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error durante el registro");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};