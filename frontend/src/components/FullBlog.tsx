import Avatar from "./Avatar";

type BlogType = {
  author: { name: string },
  title: string,
  content: string,
  id: string
}

export default function FullBlog({ blog }: { blog: BlogType }) {
  return (

    <div className="container mx-auto min-h-screen my-6">
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2 flex flex-col space-y-4">
          <div className="pt-2">
            <h3 className="font-extrabold text-5xl">
              {blog?.title}
            </h3>
          </div>
          <div>
            <p className="text-gray-500">Published on 1 March, 2024</p>

          </div>
          <div>
            <p className="text-gray-700 text-2xl">
              {blog?.content}
            </p>
          </div>
        </div>


        <div className="col-span-1 space-y-6">
          <h3 className="text-xl font-medium border-b py-1">Author</h3>
          <div className="flex items-center space-x-4">
            <div >
              <Avatar size="large" name={blog.author.name} />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{blog.author.name}</h2>
              <p className="text-gray-500 text-xl">Master of mirth, purveryor of puns, and the funniest person on earth.</p>
              {/* TODO : add author.bio in backend and uncomment the below line */}
              {/* <p className="text-gray-500 text-xl">{blog.author.bio}</p> */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
