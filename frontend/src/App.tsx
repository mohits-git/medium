import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup.tsx'
import SignIn from './pages/Signin.tsx'
import Blog from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'
import Layout from './Layout.tsx'
import NewBlog from './pages/NewBlog.tsx'
import DashBoard from './components/DashBoard.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<DashBoard />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/blogs'} element={<Blogs />} />
          <Route path={'/blog/:id'} element={<Blog />} />
          <Route path={'/publish'} element={<NewBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
