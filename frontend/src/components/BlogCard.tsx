// TODO : add tags ex: lifestyle, technical, science, gaming, etc. first in backend and then frontend
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


function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
  )
}
