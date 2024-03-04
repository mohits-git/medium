import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function AppBar() {
  return (
    <div className="border-b flex justify-between container mx-auto py-3 px-6">
      <Link to={'/blogs'} className="cursor-pointer">
        <div className="text-3xl font-extrabold">Medium</div>
      </Link>
      <Avatar size="large" name="Mohit" />
    </div>
  )
}
