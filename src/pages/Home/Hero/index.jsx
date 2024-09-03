import React from "react";
import heroImg from "../../../assets/home-hero-img.webp";

const Hero = () => {
  return (
    <div className="hero hero--home">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 data-aos="fade-up" className="heading heading--primary">
              Borderless payments at your convenience
            </h1>

            <p data-aos="fade-up" data-aos-delay="500">
              Pay Anyone, Anywhere in the World, in few Clicks.
            </p>

            <div className="hero__ctas">
              <button
                data-aos="fade-up"
                data-aos-delay="1000"
                className="btn btn--primary"
              >
                Get a business account
              </button>

              <button
                data-aos="fade-up"
                data-aos-delay="1000"
                className="btn btn--white"
              >
                Get a personal account
              </button>
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
