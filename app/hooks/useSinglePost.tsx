'use client';

import { useState, useEffect, useCallback } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  imagePublicId?: string;
}

export function useSinglePost(postId: number) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/posts/${postId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post no encontrado');
        }
        throw new Error('Error al cargar el post');
      }
      
      const postData = await response.json();
      setPost(postData);
    } catch (err) {
      console.error('Error fetching post:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar el post');
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const fetchRelatedPosts = useCallback(async () => {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const allPosts: BlogPost[] = await response.json();
        const filtered = allPosts.filter(p => p.id !== postId).slice(0, 2);
        setRelatedPosts(filtered);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  }, [postId]);

  const formatContent = useCallback((content: string) => {
    return content
      .split("\n")
      .filter(Boolean)
      .map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ));
  }, []);

  const formatDate = useCallback((dateString: string) => {
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
  }, []);

  useEffect(() => {
    if (postId > 0) {
      fetchPost();
      fetchRelatedPosts();
    }
  }, [postId, fetchPost, fetchRelatedPosts]);

  return {
    post,
    relatedPosts,
    loading,
    error,
    formatContent,
    formatDate
  };
}