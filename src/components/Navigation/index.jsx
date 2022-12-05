import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import NavLink from "../NavLink";

import Hamburger from "hamburger-react";

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <Logo />
          </div>

          <ul className="navbar__list">
            <NavLink route="#how-it-works" label="How it Works" />
            <NavLink route="#rates" label="Our Rates" />
            <NavLink route="#blog" label="Blog" />
            <NavLink route="#faq" label="FAQ" />
            <NavLink route="#contact" label="Contact Us" />
          </ul>

          <a
            href="https://vitalswap.com/download.html"
            className="navbar__cta btn btn--primary"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
