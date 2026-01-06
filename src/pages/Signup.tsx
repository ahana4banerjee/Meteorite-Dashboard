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
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button>Create Account</button>
    </form>
  );
}
