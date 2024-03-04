import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import SkeletonBlog from "../components/SkeletonBlog";

export default function Blog() {
  const { id = "" } = useParams<{ id: string }>();
  const { loading, blog } = useBlog(id);
  if (loading) {
    return (
      <div className="bg-gray-50 ">
      <SkeletonBlog />
      </div>
    )
  }
  if (blog)
    return (
      <div className="bg-gray-50 ">
        <FullBlog blog={blog} />
      </div>
    )
  else {
    return <div>Loading...</div>
  }
}

