import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  imagePublicId?: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const postId = Number(params.id);
  if (isNaN(postId)) {
    return notFound();
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const postResponse = await fetch(`${baseUrl}/api/posts/${postId}`, {
      next: { revalidate: 60 }
    });

    if (!postResponse.ok) {
      if (postResponse.status === 404) {
        return notFound();
      }
      
      const errorData = await postResponse.json().catch(() => null);
      console.error('Error en API:', {
        status: postResponse.status,
        error: errorData?.error || 'Error desconocido'
      });
      throw new Error(errorData?.error || 'Error al cargar el post');
    }

    const post: BlogPost = await postResponse.json();

    let relatedPosts: BlogPost[] = [];
    try {
      const allPostsResponse = await fetch(`${baseUrl}/api/posts`, {
        next: { revalidate: 60 }
      });

      if (allPostsResponse.ok) {
        const allPosts: BlogPost[] = await allPostsResponse.json();
        relatedPosts = allPosts
          .filter((otherPost) => otherPost.id !== post.id)
          .slice(0, 2);
      }
    } catch (error) {
      console.error('Error obteniendo posts relacionados:', error);
    }

    const formatContent = (content: string) => {
      return content
        .split("\n")
        .filter(Boolean)
        .map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ));
    };

    const formatDate = (dateString: string) => {
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch {
        return dateString;
      }
    };

    return (
      <div className="min-h-screen bg-background text-white">
        <Navbar />

        <div className="container mx-auto px-4 pt-28 pb-16">
          <div className="mb-8">
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-700"
              asChild
            >
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Blog
              </Link>
            </Button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-primary pl-4">
            {post.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <span className="text-zinc-600">•</span>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-primary" />
                  <span>Publicado por Eduardo Chiozzi S.A</span>
                </div>
              </div>

              <div className="prose prose-invert prose-zinc max-w-none">
                {formatContent(post.content)}
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <>
              <div className="my-12 border-t border-zinc-800"></div>
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">
                  Otros Artículos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((otherPost) => (
                    <div
                      key={otherPost.id}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden flex flex-col h-full hover:border-zinc-600 transition-colors"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={otherPost.imageUrl || "/placeholder.svg"}
                          alt={otherPost.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                          <Calendar className="h-3 w-3 text-primary" />
                          <span>{formatDate(otherPost.createdAt)}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                          <Link href={`/blog/${otherPost.id}`}>
                            {otherPost.title}
                          </Link>
                        </h3>
                        <p className="text-text-secondary text-sm line-clamp-3">
                          {otherPost.content.substring(0, 120)}...
                        </p>
                      </div>
                      <div className="px-6 pb-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-zinc-700 hover:bg-primary/10 hover:text-primary hover:border-primary"
                          asChild
                        >
                          <Link href={`/blog/${otherPost.id}`}>
                            Leer artículo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return notFound();
  }
}