import React from "react";
import { Link, useLocation } from "react-router-dom";

import footer_logo from "../../assets/vitalswap-logo2.png";

import linkedin_icon from "../../assets/linkedin.svg";
import twitter_icon from "../../assets/twitter.svg";
import instagram_icon from "../../assets/instagram.svg";
import facebook_icon from "../../assets/facebook.svg";

function Footer() {
  const { pathname } = useLocation();
  return (
    <footer
      className={`footer ${pathname === "/" ? "footer__home" : ""}`}
      id="contact"
    >
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <img src={footer_logo} alt="Vitalswap footer logo" />
          </div>
          <div className="footer__about-us">
            <h5 className="footer__heading">About Us</h5>

            <p>
              VitalSwap provides easy and secured way to swap, send and make
              payments across the globe. We provides the marketplace as a
              technology. All funds are held and insured by FDIC at processors
              bank.
            </p>

            <div className="footer__useful-links">
              <Link to="/terms" className="footer__link">
                Terms of Service
              </Link>

              <Link to="/privacy" className="footer__link">
                Privacy POlicy
              </Link>
            </div>
          </div>

          <div className="footer__contact">
            <h5 className="footer__heading">Get Connected</h5>

            <div className="footer__social-links">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/vitalswap"
                className="footer__link"
              >
                <img src={linkedin_icon} alt="Linkedin Icon" />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/vitalswap"
                className="footer__link"
              >
                <img src={twitter_icon} alt="Twitter Icon" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/vitalswap"
                className="footer__link"
              >
                <img src={instagram_icon} alt="Instagram Icon" />
              </a>

              <a
                target="_blank"
                href="https://web.facebook.com/Vitalswap"
                className="footer__link"
              >
                <img src={facebook_icon} alt="Facebook Icon" />
              </a>
            </div>

            <p>
              <a href={"mailto:contact@vitalswap.com"}>contact@vitalswap.com</a>
            </p>

            <p>
              <a href={"tel:+1725-234-0077"}>+1 725-234-0077</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
