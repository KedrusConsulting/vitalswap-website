import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper";
import { HeroSlide1, HeroSlide2, HeroSlide3 } from "./HeroSlide";
import PoweredBy from "../../../components/PoweredBy";

const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
};

const pagination = {
  clickable: true,
};

function Hero() {
  return (
    <div className="header__hero">
      <div className="hero">
        <div className="hero__wrapper">
          <Swiper
            loop={true}
            autoplay={autoplay}
            pagination={pagination}
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
          </Swiper>
        </div>
      </div>

      <PoweredBy />
    </div>
  );
}

export default Hero;
