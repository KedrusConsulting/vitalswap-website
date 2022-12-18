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
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
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
