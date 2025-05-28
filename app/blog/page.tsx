"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { usePostsList } from "../hooks/usePostsList";
import WhatsAppButton from "../components/whatsapp-button";

export default function BlogPage() {
  const { blogPosts, loading, error, handleRetry, formatDate } = usePostsList();

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto text-center">
            <p>Cargando artículos...</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Error al cargar el blog</h1>
            <p className="text-text-secondary mb-6">{error}</p>
            <Button
              variant="outline"
              onClick={handleRetry}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Intentar nuevamente
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0">
          <Image
            src="/trama-base.png"
            alt="Fondo Nuestra Empresa"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-text-secondary mb-8">
              Descubre las últimas tendencias, innovaciones y noticias sobre la
              industria del etiquetado y packaging.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">TODOS LOS ARTÍCULOS</h2>
            </div>
          </div>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-background border-zinc-800 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.createdAt)}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <CardDescription className="text-text-secondary line-clamp-3">
                      {post.content}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button
                      variant="link"
                      className="text-primary p-0 flex items-center group"
                      asChild
                    >
                      <Link href={`/blog/${post.id}`}>
                        Leer más{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary">
                No hay artículos disponibles
              </p>
            </div>
          )}
        </div>
      </section>
      <WhatsAppButton
        phoneNumber="(+ 54 9 3404) 653267"
        message="Hola, quisiera discutir mi próximo proyecto con ustedes !"
      />

      <Footer />
    </div>
  );
}
