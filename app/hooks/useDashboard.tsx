"use client";

import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EditorState, convertToRaw } from "draft-js";

interface Post {
  id: number;
  title: string;
  content: string;
}

const useDashboard = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState(EditorState.createEmpty());
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const username = sessionStorage.getItem('username');
      const password = sessionStorage.getItem('password');

      if (!username || !password) {
        router.push('/login');
      }
    }
  }, [router]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      router.push('/login');
    }
  };

  const handleEditorChange = (editorState: SetStateAction<EditorState>) => {
    setPostContent(editorState);
  };

  const getPostContentAsRaw = () => {
    const contentState = postContent.getCurrentContent();
    return JSON.stringify(convertToRaw(contentState));
  };

  const handleDeletePost = async (id: number) => {
    try {
      await fetch(`/api/posts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error eliminando el post:', error);
    }
  };

  return {
    postTitle,
    setPostTitle,
    postContent,
    handleEditorChange,
    getPostContentAsRaw,
    handleLogout,
    posts,
    handleDeletePost
  };
};

export default useDashboard;