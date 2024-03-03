import AppBar from "./components/AppBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  )
}
