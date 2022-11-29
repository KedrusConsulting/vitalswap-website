import React from "react";
import { Link } from "react-router-dom";

import apple_store from "../../../assets/apple-store@1.5x.png";
import google_play from "../../../assets/google-play@1.5x.png";
import app_screen_1 from "../../../assets/app-screen.png";

function Marketplace() {
  return (
    <section className="marketplace__section">
      <div className="container">
        <div className="marketplace__grid">
          <div className="marketplace__text-box">
            <h3 className="heading--tertiary">
              One Stop Marketplace for your Best rate
            </h3>

            <p>
              Send money to friends and family. Make payments to merchants
              accross borders.
            </p>

            <div className="hero__cta">
              <Link to="#">
                <img src={apple_store} alt="Apple store cta" />
              </Link>

              <Link to="#">
                <img src={google_play} alt="Google play cta" />
              </Link>
            </div>
          </div>

          <div className="marketplace__img-box">
            <img src={app_screen_1} alt="App screen" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
