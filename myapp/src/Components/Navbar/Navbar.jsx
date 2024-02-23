import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className={`nav-links ${showMenu ? "show-menu" : ""}`}>
          <li>
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#gallery"> Gallery</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
          <p>abcd</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
