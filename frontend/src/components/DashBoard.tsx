import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-screen w-[100px] flex flex-col items-center justify-center space-y-4">
          <Link to={`/signup`} className="rounded-full text-white w-full text-center py-2 bg-black border border-gray-400" >SignUp</Link>
          <Link to={`/signin`} className="rounded-full text-white w-full text-center py-2 bg-black border border-gray-400" >Login</Link>
          <Link to={`/blogs`} className="rounded-full text-white w-full text-center py-2 bg-black border border-gray-400" >Blogs</Link>
          <Link to={`/publish`} className="rounded-full text-white w-full text-center py-2 bg-black border border-gray-400" >Publish</Link>
        </div>
      </div>
    </div>
  )
}
