import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type BlogType = {
  author: { name: string },
  title: string,
  content: string,
  id: string
}

export const useBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    const req = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      setBlog(response.data.blog);
      setLoading(false);
    }

    req();

  }, [id]);

  return {
    loading,
    blog
  }

}


export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Array<BlogType>>([]);

  useEffect(() => {
    const req = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      setBlogs(response.data.blog);
      setLoading(false);
    }

    req();

  }, []);

  return {
    loading,
    blogs
  }
}
