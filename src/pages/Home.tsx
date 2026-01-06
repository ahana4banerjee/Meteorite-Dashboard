import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/login">Already a user? Login</Link><br/>
      <Link to="/signup">New here? Signup</Link>
    </div>
  );
}
