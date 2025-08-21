import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="vit">
      <h2 className="logo">Fonte</h2>

      {/* Burger icon */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Nav links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/Return" onClick={() => setIsOpen(false)}>Regis</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
