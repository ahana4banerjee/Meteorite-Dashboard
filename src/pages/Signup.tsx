import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../auth/authService";

export default function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  function handleSignup(e:any){
    e.preventDefault();
    saveUser({email,password});
    localStorage.setItem("auth","true");
    navigate("/dashboard");
  }

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-300">
    <form onSubmit={handleSignup} className="bg-gray-700 p-8 rounded-xl shadow-lg w-80">
      <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>
      <input className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="input" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button className="btn w-full mt-2">Create Account</button>
    </form>
  </div>
);

}
