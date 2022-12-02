import React from "react";
import { Link } from "react-router-dom";
import apple_store from "../../../assets/apple-store@1.5x.png";
import google_play from "../../../assets/google-play@1.5x.png";

import cash_app from "../../../assets/Cash App - Dollar - Full 1@2x.png";
import flutterwave from "../../../assets/Flutterwave 1@2x.png";
import zelle from "../../../assets/Group@2x.png";
import vouched from "../../../assets/vouched_logo_hi_res 1@2x.png";
import plaid from "../../../assets/plaid-logo-horizontal-RGB 1@2x.png";

// import hero_img01 from "../../../assets/hero-img@2x.png";
import hero_img01 from "../../../assets/hero-img@1x.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text-box">
        <h1 className="heading--primary">
          The Easy way to Swap & Send your money.
        </h1>
        <p className="text__lg">
          Send money easily to your friends and family in few clicks
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

      <div className="hero__img-box">
        <div className="layer-glow "></div>
        <img src={hero_img01} alt="Hero img" />

        <svg
          className="hero__svg"
          viewBox="0 0 761 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="powered-by">
        <h4>Powered By</h4>

        <div className="powered-by-logos">
          <img
            className="powered-by-logo"
            src={flutterwave}
            alt="Flutterwave Logo"
          />
          <img className="powered-by-logo" src={plaid} alt="Plaid Logo" />
          <img className="powered-by-logo" src={vouched} alt="Vouched Logo" />
          <img className="powered-by-logo" src={cash_app} alt="CashApp Logo" />
          <img className="powered-by-logo" src={zelle} alt="Zelle Logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
