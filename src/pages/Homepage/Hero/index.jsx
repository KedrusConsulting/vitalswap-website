import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Pagination, Autoplay } from "swiper";

import cash_app from "../../../assets/Cash App - Dollar - Full 1@2x.png";
import flutterwave from "../../../assets/Flutterwave 1@2x.png";
import zelle from "../../../assets/Group@2x.png";
import vouched from "../../../assets/vouched_logo_hi_res 1@2x.png";
import plaid from "../../../assets/plaid-logo-horizontal-RGB 1@2x.png";

import { HeroSlide1, HeroSlide2, HeroSlide3, HeroSlide4 } from "./HeroSlide";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let cur = 0;

  const sliderRef = useRef();
  const dotRef = useRef();

  // const goToSlide = function (slide) {
  //   sliderRef.current
  //     ?.querySelectorAll(".slider__slide")
  //     .forEach((s, i) => s.classList.remove("slider__slide--active"));

  //   dotRef.current
  //     ?.querySelectorAll(".slider__dot")
  //     .forEach((s, i) => s.classList.remove("slider__dot--active"));

  //   sliderRef.current
  //     ?.querySelectorAll(".slider__slide")
  //     [slide].classList.add("slider__slide--active");

  //   dotRef.current
  //     ?.querySelectorAll(".slider__dot")
  //     [slide].classList.add("slider__dot--active");
  // };

  // let sliderTimer = setInterval(() => {
  //   if (cur < 3) {
  //     cur++;
  //   } else {
  //     cur = 0;
  //   }

  //   goToSlide(cur);
  // }, 5000);

  // const pagination = (e) => {
  //   const elem = e.target.closest(".slider__dot");
  //   cur = Number(elem.dataset.dot);
  //   goToSlide(cur);
  //   clearInterval(sliderTimer);
  //   sliderTimer = setInterval(() => {
  //     if (cur < 3) {
  //       cur++;
  //     } else {
  //       cur = 0;
  //     }
  //     goToSlide(cur);
  //   }, 5000);
  // };

  // useEffect(() => {
  //   const carousel = new Swipe(document.querySelector(".slider__container"), {
  //     startSlide: 0,
  //     speed: 400,
  //   });
  // }, []);

  return (
    <div className="hero">
      {/* <div className="slider__container">
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

        <div className="container">
          <div className="slider__dots" ref={dotRef} onClick={pagination}>
            <div className="slider__dot slider__dot--active" data-dot="0"></div>
            <div className="slider__dot" data-dot="1"></div>
            <div className="slider__dot" data-dot="2"></div>
            <div className="slider__dot" data-dot="3"></div>
          </div>
        </div>
      </div> */}

      <div className="hero__wrapper">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero__slide">
              <HeroSlide1 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__slide">
              <HeroSlide2 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__slide">
              <HeroSlide3 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__slide">
              <HeroSlide4 />
            </div>
          </SwiperSlide>
        </Swiper>
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
