import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../auth/authService";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  function handleLogin(e:any){
    e.preventDefault();
    if(validateUser(email,password)){
      localStorage.setItem("auth","true");
      navigate("/dashboard");
    } else alert("Invalid credentials");
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button>Login</button>
    </form>
  );
}
