import React from "react";
import heroImg from "../../../assets/hero-image-4@2x.webp";

const Hero = () => {
  return (
    <div className="hero hero--home">
      <div className="container">
        <div className="hero__inner hero__inner--home">
          <div className="hero__content">
            <h1 data-aos="fade-up" className="heading heading--primary">
              Borderless payments at your convenience
            </h1>

            <p data-aos="fade-up" data-aos-delay="500">
              Pay anyone, anywhere in the world.
            </p>

            <div className="hero__ctas">
              <a
                data-aos="fade-up"
                data-aos-delay="1000"
                className="btn btn--primary"
                href="https://business-vitalswap.netlify.app"
              >
                Get a business account
              </a>

              <a
                data-aos="fade-up"
                data-aos-delay="1000"
                className="btn btn--white"
                href="https://personal-vitalswap.netlify.app"
              >
                Get a personal account
              </a>
            </div>
          </div>

          <div className="hero__img hero__img--home">
            <div className="layer-glow "></div>
            <img
              data-aos="fade-left"
              data-aos-offset="-100"
              data-aos-delay="1000"
              className="img-main"
              src={heroImg}
              alt="pattern"
            />

            <svg
              className="hero__svg hero__svg--3"
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

            <div className="rate__card">
              <div className="rate__send">
                <div className="rate__left">
                  <span className="label">Amount you’ll receive</span>
                  <span className="atm">{`${"N"}${"3,567,689.79"}`}</span>
                </div>

                <div className="rate__right">
                  <span className="rate">Exchange Rate</span>
                  <span className="atm">1 USD = {1589} NGN</span>
                </div>
              </div>

              <div className="rate__receive">
                <div className="rate__left">
                  <span className="label">Amount you’ll Pay</span>
                  <span className="atm">
                    {"$5,000"} <span className="rate__btn">Splittable</span>
                  </span>
                </div>

                <div className="rate__right">
                  <span className="rate__cta">
                    <span>Buy Dollar</span>
                    <img src={"/us-flag.svg"} alt="USD svg" />
                  </span>
                </div>
              </div>
            </div>

            <div className="wallet-card">
              <div className="wallet-card__dollar">
                <span>USD Wallet</span>
                <span>$10,000</span>
              </div>

              <button className="wallet-card__btn">Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
