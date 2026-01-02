import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer text-center my-bg" id="footer">
      <div className="container">
        <h2 className="text-white">Growth Academy</h2>
        <p className=" m-auto">
          At Growth Academy, community is our cornerstone. Through expert-led
          courses in trading and marketing, we empower individuals to thrive.
          Join us in unlocking your potential today.
        </p>
        <div className="links">
          <Link to="">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-youtube"></i>
          </Link>
         
        </div>
      </div>
    </footer>
  );
}
