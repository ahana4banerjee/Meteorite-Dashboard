import { Link } from "react-router-dom";

export default function Home(){
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 gap-4">
    <h2 className="text-2xl font-semibold">Welcome to Meteorite Labs</h2>
    <Link to="/login" className="btn w-60 text-center">Already a user? Login</Link>
    <Link to="/signup" className="btn w-60 text-center">New here? Signup</Link>
  </div>
);

}
