import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import NavLink from "../NavLink";

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <Logo />
          </div>

          <ul className="navbar__list">
            <NavLink route="#" label="How it Works" />
            <NavLink route="#" label="Our Rates" />
            <NavLink route="#" label="Blog" />
            <NavLink route="#" label="FAQ" />
            <NavLink route="#" label="Contact Us" />
          </ul>

          <Link to="#" className="btn btn--primary">
            Download App
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
