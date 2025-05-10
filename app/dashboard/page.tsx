"use client";
import { Save, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import ImageUploader from "../components/imageUploader";
import { Input } from "@/components/ui/input";
import { useDashboard } from "../hooks/useDashboard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const {
    postTitle,
    setPostTitle,
    postContent,
    setPostContent,
    handleImageUpload,
    handleSubmit,
    isSubmitting,
  } = useDashboard();
  
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/access-denied');
    }
  }, [status, router]);

  if (status === "loading" || !session) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-8 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Panel de Administración
              </h1>
              <p className="text-text-secondary mt-2">
                Bienvenido, {session.user?.name || session.user?.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                onClick={() => signOut({ callbackUrl: '/login' })}
              >
                <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="posts" className="w-full">
            <TabsContent value="posts" className="mt-0">
              <Card className="bg-background/80 backdrop-blur-md border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Crear Nuevo Post</CardTitle>
                  <CardDescription className="text-text-secondary">
                    Crea un nuevo artículo para el blog
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="post-title" className="text-white">
                      Título del Post
                    </Label>
                    <input
                      id="post-title"
                      placeholder="Ingresa el título del post"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="post-content" className="text-white">
                      Contenido
                    </Label>
                    <textarea
                      id="post-content"
                      placeholder="Escribe el contenido de tu post aquí..."
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      className="flex min-h-[300px] w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-900 resize-y"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Imagen Destacada</Label>
                    <ImageUploader
                      label="Seleccionar Imagen"
                      onUpload={handleImageUpload}
                      maxImages={1}
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button 
                      className="bg-primary/70 hover:bg-primary/80 text-white"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Publicando..."
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Publicar Post
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="mt-0">
              <Card className="bg-background/80 backdrop-blur-md border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">
                    Biblioteca de Medios
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    Gestiona las imágenes y archivos multimedia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUploader
                    label="Subir Archivos"
                    onUpload={handleImageUpload}
                    maxImages={5}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <Card className="bg-background/80 backdrop-blur-md border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Configuración</CardTitle>
                  <CardDescription className="text-text-secondary">
                    Administra la configuración del blog
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Título del Blog</Label>
                      <Input
                        placeholder="Título del blog"
                        defaultValue="Blog de Chiozzi"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Descripción</Label>
                      <Input
                        placeholder="Descripción del blog"
                        defaultValue="Noticias y artículos sobre la industria del etiquetado"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-primary/70 hover:bg-primary/80 text-white">
                        Guardar Cambios
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}