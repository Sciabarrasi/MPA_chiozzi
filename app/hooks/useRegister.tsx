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
        throw new Error("Por favor completa todos los campos");
      }

      if (data.password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }

      // Llamada a la API
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      // Redirección después del registro exitoso
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error durante el registro");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};