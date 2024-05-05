import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyWebsite
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem path="/" text="Home" onClick={toggleMenu} />
            <NavItem path="/about" text="About" onClick={toggleMenu} />
            <NavItem path="/services" text="Services" onClick={toggleMenu} />
            <NavItem path="/contact" text="Contact" onClick={toggleMenu} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ path, text, onClick }) => (
  <li className="nav-item">
    <Link className="nav-link" to={path} onClick={onClick}>
      {text}
    </Link>
  </li>
);

export default Navbar;
