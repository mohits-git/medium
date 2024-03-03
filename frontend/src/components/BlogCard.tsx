// TODO : add tags ex: lifestyle, technical, science, gaming, etc. first in backend and then frontend

import Avatar from "./Avatar"

// TODO : Change Avatar to a author's photo, first change the backend logic
export default function BlogCard({ author, title, content, publishDate, tags = ['Lifestyle', 'Web'] }: {
  author: string,
  title: string,
  content: string,
  publishDate: string,
  tags?: Array<string>
}) {
  return (
    <div className="flex flex-col justify-center space-y-2 py-12 border-b border-b-slate-200">

      <div className="flex items-center space-x-1">
        <Avatar name="Mohit" />
        <span className="pl-1">{author}</span>
        <span className="text-slate-500">|</span>
        <span className="text-slate-500">{publishDate}</span>
      </div>

      <div className="pt-2">
        <h3 className="font-extrabold text-2xl">
          {title}
        </h3>
      </div>

      <div>
        <p className="text-gray-700 text-xl">
          {content.slice(0, 131) + `...`}
        </p>
      </div>

      <div className="flex items-center pt-8 space-x-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
        <span className="text-slate-500">{Math.floor(content.length / 100)} min read</span>
      </div>

    </div>
  )
}
