import ClientBlogPost from "@/app/components/ClientBlogPost";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface BlogPostPageProps {
  params: { id: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = Number(params.id);

  if (isNaN(postId)) {
    notFound();
  }

  return (
    <Suspense fallback={<p>Cargando artículo...</p>}>
      <ClientBlogPost postId={postId} />
    </Suspense>
  );
}
