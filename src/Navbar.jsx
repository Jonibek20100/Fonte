import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="vit">
      <h2 className="logo">Fonte</h2>

      {/* Burger tugma */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Menyu */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/ptoject" onClick={() => setIsOpen(false)}>Regis</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
