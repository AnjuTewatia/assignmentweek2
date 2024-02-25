// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className={`menu ${isMobile ? "mobile" : ""}`}>
        <div className="nav">
          <p> Home </p>
          <p>Gallery</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <button onClick={handleToggle} className="toggle-button">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
