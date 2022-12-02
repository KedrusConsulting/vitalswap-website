import React from "react";
import { Link } from "react-router-dom";

import apple_store from "../../../assets/apple-store@1.5x.png";
import google_play from "../../../assets/google-play@1.5x.png";
import app_screen_1 from "../../../assets/app-screen.png";

function Marketplace() {
  return (
    <section className="marketplace__section">
      <div className="marketplace__floating-img">
        <svg
          width="375"
          height="428"
          viewBox="0 0 375 428"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M210.889 0.643121C253.41 0.643121 293.219 12.3326 327.333 32.6786H327.373L328.28 33.231C329.597 34.0243 330.883 34.8277 332.189 35.6412L354.138 49.1985L614.14 207.006L640.845 164.436L645.123 164.838L684.273 287.737C688.821 304.328 686.427 312.653 673.583 308.545L426.276 152.957L307.269 79.9285C279.477 61.9223 246.39 51.4681 210.889 51.4681C112.365 51.4681 32.4986 131.898 32.4986 231.118C32.4986 330.338 112.375 410.768 210.889 410.768C278.599 410.768 337.495 372.777 367.72 316.81L410.879 343.272C371.759 413.871 296.868 461.623 210.889 461.623C84.4731 461.623 -18 358.426 -18 231.118C-18 103.82 84.4731 0.623047 210.889 0.623047V0.643121Z"
            fill="#FFB805"
          />
        </svg>
      </div>
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
            <img
              className="marketplace__img"
              src={app_screen_1}
              alt="App screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
