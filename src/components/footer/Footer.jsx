import React from "react";
import SocialMedia from "../socialmedia/SocialMedia";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <SocialMedia />
      <span className="email-txt">example@example.com</span>
      <small className="copyright">
        Copyright © 2025 Name. All rights reserved.
      </small>
    </div>
  );
}
