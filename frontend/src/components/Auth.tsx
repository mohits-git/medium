import { SignUpSchema } from "@mohits-npm/medium-zod-validation";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setpostInputs] = useState<SignUpSchema>({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, {
        name: postInputs.name,
        email: postInputs.email,
        password: postInputs.password
      });
      
      const jwt = response.data.token;

      localStorage.setItem('token', jwt);

      navigate('/blogs')

    } catch (error) {
      alert("Error while log in")
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center ">
        <p className="text-4xl font-extrabold">{type === "signup" ? "Create an account" : "Login to your account"}</p>
        <p className="text-gray-500 text-lg mt-2">{type === "signup" ? "Already have an account?" : "Do not have an account?"}
          <Link to={`/${type === "signup" ? "signin" : "signup"}`} className="underline px-1 hover:text-blue-400">{type === "signup" ? "Login" : "Signup"}</Link>
        </p>
      </div>

      <div className="flex flex-col max-w-sm mt-6 w-full">
        {type === "signup" &&
          <LabelledInput label="Name" placeholder="Enter your name" onChange={(e: ChangeEvent<HTMLInputElement>) => { setpostInputs(c => ({ ...c, name: e.target.value })) }} value={postInputs.name} />
        }
        <LabelledInput type="email" label="Email" placeholder="johndoe@example.com" onChange={(e: ChangeEvent<HTMLInputElement>) => { setpostInputs(c => ({ ...c, email: e.target.value })) }} value={postInputs.email} />
        <LabelledInput type="password" label="Password" placeholder="johndoe@example.com" onChange={(e: ChangeEvent<HTMLInputElement>) => { setpostInputs(c => ({ ...c, password: e.target.value })) }} value={postInputs.password} />
        <button className="bg-black text-white rounded-lg my-6 px-4 py-2"
        onClick={sendRequest}
        >
          {type === "signup" ? "SingUp" : "SignIn"}
        </button>
      </div>

    </div>
  )
}

interface LabelledInputTypes {
  type?: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function LabelledInput({ type = "text", label, placeholder, onChange, value }: LabelledInputTypes) {
  return (
    <div className="mt-4">
      <label
        className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={value}
        onChange={onChange}
      />
    </div>
  )

}
