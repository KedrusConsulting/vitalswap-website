import React, { useState } from "react";
import Logo from "../Logo";
import NavLink from "../NavLink";
import getDownloadAppUrl from "../../utils/getDownloadAppUrl";

function Navigation() {
  const [open, setOpen] = useState(false);
  const downloadURL = getDownloadAppUrl();

  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <Logo />
          </div>

          <ul
            className={`navbar__list ${open ? "open" : ""}`}
            onClick={() => setOpen(false)}
          >
            <NavLink
              route="https://vitalswap.com/blog/how-it-works"
              label="How it Works"
            />
            <NavLink
              route="https://vitalswap.com/blog/vitalswap-rate/"
              label="Our Rates"
            />
            <NavLink route="https://vitalswap.com/blog" label="Blog" />
            <NavLink route="https://vitalswap.com/blog/faq/" label="FAQ" />
            <NavLink route="#contact" label="Contact Us" />
          </ul>

          <a
            href={downloadURL}
            className="navbar__cta btn btn--primary"
            target="_blank"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
