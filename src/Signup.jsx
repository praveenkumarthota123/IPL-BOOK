import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="auth-container signup-bg">
      <h2>Sign up</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button className="auth-btn">Create Account</button>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
