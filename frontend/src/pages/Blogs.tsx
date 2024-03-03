import BlogCard from "../components/BlogCard";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto ">
        <BlogCard
          author="Mohit"
          title="How a Ugly Single-Page Website makes $5,000 a Month with Affiliate Marketing"
          content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is a dream of a man"
          publishDate="3 March, 2024"
        />
        <BlogCard
          author="Mohit"
          title="How a Ugly Single-Page Website makes $5,000 a Month with Affiliate Marketing"
          content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is a dream of a man"
          publishDate="3 March, 2024"
        />
        <BlogCard
          author="Mohit"
          title="How a Ugly Single-Page Website makes $5,000 a Month with Affiliate Marketing"
          content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is a dream of a man"
          publishDate="3 March, 2024"
        />
      </div>
    </div>
  )
}
