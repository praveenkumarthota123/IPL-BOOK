import "./App.css";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="help-page">
      
      {/* Back to Home */}
      <Link to="/" className="home-btn">🏠</Link>

      <h1>Help & Support</h1>

      <div className="help-card">
        <p><strong>📞 Contact:</strong> +91 98765 43210</p>
        <p><strong>📧 Email:</strong> support@iplbook.com</p>
        <p><strong>📍 Location:</strong> Chennai, Tamil Nadu, India</p>

        <textarea
          placeholder="Write your feedback here..."
          rows="5"
        ></textarea>

        <button className="send-btn">Send Feedback</button>
      </div>
    </div>
  );
}
