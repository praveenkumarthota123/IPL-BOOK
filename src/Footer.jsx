import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 IPL BOOK. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
