"use client";
import { useState } from "react";

export function useDashboard() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [imageData, setImageData] = useState<{
    publicId: string;
    url: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (result: { publicId: string; url: string }) => {
    setImageData({
      publicId: result.publicId,
      url: result.url
    });
  };

  const handleSubmit = async () => {
    if (!postTitle || !postContent || !imageData) {
      alert("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          imagePublicId: imageData.publicId,
          imageUrl: imageData.url,
          userId: 2,
        }),
      });

      if (!response.ok) throw new Error("Error al crear el post");

      setPostTitle("");
      setPostContent("");
      setImageData(null);

      alert("Post creado exitosamente!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    postTitle,
    setPostTitle,
    postContent,
    setPostContent,
    imageData,
    handleImageUpload,
    handleSubmit,
    isSubmitting,
  };
}
