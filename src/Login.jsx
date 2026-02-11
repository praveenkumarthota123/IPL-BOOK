import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container login-bg">
      <h2>Log in</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button className="auth-btn">Log in</button>

      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
