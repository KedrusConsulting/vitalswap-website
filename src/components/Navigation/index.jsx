import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <NavLink route="#how-it-works" label="How it Works" />
            <NavLink route="#rates" label="Our Rates" />
            <NavLink route="https://vitalswap.com/blog" label="Blog" />
            <NavLink route="#faq" label="FAQ" />
            <NavLink route="#contact" label="Contact Us" />
          </ul>

          <a
            href={downloadURL}
            className="navbar__cta btn btn--primary"
            target="_blank"
          >
            Download App
          </a>

          {/* {!open ? (
            <svg
              onClick={() => setOpen(true)}
              className="navbar__mobile"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 4.125C1.5 3.82664 1.61853 3.54048 1.82951 3.32951C2.04048 3.11853 2.32664 3 2.625 3H21.375C21.6733 3 21.9596 3.11853 22.1705 3.32951C22.3815 3.54048 22.5 3.82664 22.5 4.125C22.5 4.42336 22.3815 4.70952 22.1705 4.92049C21.9596 5.13147 21.6733 5.25 21.375 5.25H2.625C2.32664 5.25 2.04048 5.13147 1.82951 4.92049C1.61853 4.70952 1.5 4.42336 1.5 4.125ZM1.5 11.625C1.5 11.3266 1.61853 11.0405 1.82951 10.8295C2.04048 10.6185 2.32664 10.5 2.625 10.5H21.375C21.6733 10.5 21.9596 10.6185 22.1705 10.8295C22.3815 11.0405 22.5 11.3266 22.5 11.625C22.5 11.9234 22.3815 12.2095 22.1705 12.4205C21.9596 12.6315 21.6733 12.75 21.375 12.75H2.625C2.32664 12.75 2.04048 12.6315 1.82951 12.4205C1.61853 12.2095 1.5 11.9234 1.5 11.625ZM2.625 18C2.32664 18 2.04048 18.1185 1.82951 18.3295C1.61853 18.5405 1.5 18.8266 1.5 19.125C1.5 19.4233 1.61853 19.7096 1.82951 19.9205C2.04048 20.1315 2.32664 20.25 2.625 20.25H21.375C21.6733 20.25 21.9596 20.1315 22.1705 19.9205C22.3815 19.7096 22.5 19.4233 22.5 19.125C22.5 18.8266 22.3815 18.5405 22.1705 18.3295C21.9596 18.1185 21.6733 18 21.375 18H2.625Z"
                fill="#343947"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setOpen(false)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25"
                stroke="#343947"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
