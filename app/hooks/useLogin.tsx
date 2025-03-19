"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);

        // Redirección después del login exitoso
        router.push('/dashboard');
      } else {
        console.error("Error de inicio de sesión:", await response.text());
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    showPassword,
    setShowPassword,
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    handleSubmit,
  };
};

export default useLogin;