import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup.tsx'
import SignIn from './pages/Signin.tsx'
import Blog from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/blogs'} element={<Blogs />} />
        <Route path={'/blog/:id'} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
