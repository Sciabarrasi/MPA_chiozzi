"use client";

import Link from "next/link";
import { Plus, Save, LogOut, ImageIcon, Trash } from "lucide-react";
import { Editor } from "draft-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import useDashboard from "../hooks/useDashboard";

export default function DashboardPage() {
  const {
    postTitle,
    setPostTitle,
    postContent,
    handleEditorChange,
    handleLogout,
    posts,
    handleDeletePost
  } = useDashboard();

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-8 px-4 relative bg-gradient-to-br from-primary/10 via-secondary/15 to-yellow-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(237,125,0,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(211,84,0,0.15)_0%,transparent_40%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Panel de Administración</h1>
              <p className="text-text-secondary mt-2">Gestiona el contenido del blog</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-primary/70 hover:bg-primary/80 text-white" asChild>
                <Link href="/dashboard/new-post">
                  <Plus className="mr-2 h-4 w-4" /> Nuevo Post
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                onClick={handleLogout}
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
            <TabsList className="bg-zinc-800 border-zinc-700 mb-6">
              <TabsTrigger value="posts" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Posts
              </TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Multimedia
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Configuración
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
              <Card className="bg-background/80 backdrop-blur-md border-zinc-800 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Crear Nuevo Post</CardTitle>
                  <CardDescription className="text-text-secondary">Crea un nuevo artículo para el blog</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="post-title" className="text-white">
                      Título del Post
                    </Label>
                    <Input
                      id="post-title"
                      placeholder="Ingresa el título del post"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="post-content" className="text-white">
                      Contenido
                    </Label>
                    <div className="bg-zinc-800 border border-zinc-700 text-white p-2 rounded-md">
                      <Editor
                        editorState={postContent}
                        onChange={handleEditorChange}
                        placeholder="Escribe el contenido aquí..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Imagen Destacada</Label>
                    <div className="border border-zinc-700 rounded-md p-4 bg-zinc-800">
                      <div className="flex items-center justify-center h-40 border-2 border-dashed border-zinc-700 rounded">
                        <div className="text-center">
                          <ImageIcon className="h-10 w-10 text-text-secondary mx-auto mb-2" />
                          <p className="text-text-secondary mb-2">Arrastra una imagen o haz clic para seleccionar</p>
                          <Button
                            variant="outline"
                            className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                          >
                            Seleccionar Imagen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                    >
                      Guardar como Borrador
                    </Button>
                    <Button className="bg-primary/70 hover:bg-primary/80 text-white">
                      <Save className="mr-2 h-4 w-4" /> Publicar Post
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-md border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Lista de Posts</CardTitle>
                  <CardDescription className="text-text-secondary">Administra los posts publicados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {posts.map(post => (
                    <div key={post.id} className="flex items-center justify-between bg-zinc-800 p-4 rounded-md">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                        <p className="text-sm text-text-secondary">{post.content}</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-zinc-700 text-red-500 hover:text-red-700 hover:border-red-700"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash className="mr-2 h-4 w-4" /> Eliminar
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="mt-0">
              <Card className="bg-background/80 backdrop-blur-md border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Biblioteca de Medios</CardTitle>
                  <CardDescription className="text-text-secondary">
                    Gestiona las imágenes y archivos multimedia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border-2 border-dashed border-zinc-700 rounded p-6">
                    <div className="text-center">
                      <ImageIcon className="h-10 w-10 text-text-secondary mx-auto mb-2" />
                      <p className="text-text-secondary mb-2">Sube o arrastra archivos multimedia aquí</p>
                      <Button
                        variant="outline"
                        className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                      >
                        Subir Archivos
                      </Button>
                    </div>
                  </div>
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
                      <Button className="bg-primary/70 hover:bg-primary/80 text-white">Guardar Cambios</Button>
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