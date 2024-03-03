import Avatar from "./Avatar";

export default function AppBar() {
  return (
    <div className="border-b flex justify-between container mx-auto py-3 px-6">
      <div className="text-3xl font-extrabold">Medium</div>
      <Avatar size="large" name="Mohit" />
    </div>
  )
}
