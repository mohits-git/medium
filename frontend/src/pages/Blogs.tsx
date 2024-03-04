import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
import SkeletonCard from "../components/SkeletonCard";

export default function Blogs() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto ">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto ">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <BlogCard
              title={blog.title}
              author={blog.author.name}
              content={blog.content}
              publishDate="1 March, 2024"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
