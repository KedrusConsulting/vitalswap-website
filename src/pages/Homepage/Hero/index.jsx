import React, { useEffect, useRef } from "react";

import cash_app from "../../../assets/Cash App - Dollar - Full 1@2x.png";
import flutterwave from "../../../assets/Flutterwave 1@2x.png";
import zelle from "../../../assets/Group@2x.png";
import vouched from "../../../assets/vouched_logo_hi_res 1@2x.png";
import plaid from "../../../assets/plaid-logo-horizontal-RGB 1@2x.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Pagination } from "swiper";
import { HeroSlide1, HeroSlide2, HeroSlide3, HeroSlide4 } from "./HeroSlide";

// Import Swiper styles
// import "swiper/css";

function Hero() {
  const sliderRef = useRef();
  const dotRef = useRef();

  useEffect(() => {
    window.addEventListener("load", () => {
      let cur = 0;
      const sliders = Array.from(
        sliderRef.current.querySelectorAll(".slider__slide")
      );

      const dots = Array.from(dotRef.current.querySelectorAll(".slider__dot"));

      setInterval(() => {
        if (cur < sliders.length - 1) {
          cur++;
        } else {
          cur = 0;
        }

        sliders.map((slide, i) => {
          slide.classList.remove("slider__slide--active");
        });

        dots.map((dot, i) => {
          dot.classList.remove("slider__dot--active");
        });

        sliders[cur].classList.add("slider__slide--active");
        dots[cur].classList.add("slider__dot--active");
      }, 5000);
    });
  }, []);

  return (
    <div className="hero">
      <div className="slider__container">
        <div className="slider" ref={sliderRef}>
          <div className="slider__slide slider__slide--active">
            <HeroSlide1 />
          </div>

          <div className="slider__slide">
            <HeroSlide2 />
          </div>

          <div className="slider__slide">
            <HeroSlide3 />
          </div>

          <div className="slider__slide">
            <HeroSlide4 />
          </div>
        </div>

        <div className="slider__dots" ref={dotRef}>
          <div className="slider__dot slider__dot--active"></div>
          <div className="slider__dot"></div>
          <div className="slider__dot"></div>
          <div className="slider__dot"></div>
        </div>
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
