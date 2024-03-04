import { useState } from "react";
import Avatar from "../components/Avatar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function NewBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const postBlog = async () => {
    if (title === '' || content === '') {
      setError("Please enter the requried Fields");
      return;
    }
    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      navigate('/blogs')

    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  }

  return (
    <div className="container mx-auto">

      <form>
        <div className="border-b flex justify-between container mx-auto py-3 px-6">
          <div className="text-3xl font-extrabold">Draft Your Article</div>
          <div>
            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={(e) => {
                console.log('Publishing...')
                e.preventDefault();
                postBlog()
              }}
              disabled={loading}
            >Publish</button>
            <Avatar size="large" name="Mohit" />
          </div>
        </div>

        <div className="text-sm text-red-500 my-4 mx-6">{error}</div>

        <div className="w-[90%] mx-auto space-y-4">
          <input type="text" className="w-full text-5xl font-mono border-0 outline-0 ring-0 hover:ring-0 focus:ring-0 py-2 px-4 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea className="w-full h-screen text-2xl font-mono border-0 outline-0 ring-0 hover:ring-0 focus:ring-0 py-2 px-4 rounded"
            placeholder="Tell your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
      </form>
    </div >
  )
}
