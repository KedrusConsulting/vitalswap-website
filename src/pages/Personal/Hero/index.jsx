import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Pagination, Autoplay } from "swiper";

import cash_app from "../../../assets/Cash App - Dollar - Full 1@2x.png";
import flutterwave from "../../../assets/Flutterwave 1@2x.png";
import zelle from "../../../assets/Group@2x.png";
import vouched from "../../../assets/vouched_logo_hi_res 1@2x.png";
import plaid from "../../../assets/plaid-logo-horizontal-RGB 1@2x.png";

import batesGroupLogo from "../../../assets/batesgroup-logo.png";
import dojahLogo from "../../../assets/dojah.png";
import elevateVenturesLogo from "../../../assets/elevate-ventures.png";
import beNimbleCoLogo from "../../../assets/be-nimble-co.png";
import googleLogo from "../../../assets/google.png";
import awsLogo from "../../../assets/aws.png";
import slackLogo from "../../../assets/slack.png";
import safeHeavenLogo from "../../../assets/safe-haven-mfb.png";

import { HeroSlide1, HeroSlide2, HeroSlide3 } from "./HeroSlide";

function Hero() {
  return (
    <div className="header__hero">
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
          </Swiper>
        </div>
      </div>

      <div className="powered-by">
        <h4>Powered By</h4>

        <div className="powered-by-logos">
          <img
            className="powered-by-logo"
            src={batesGroupLogo}
            alt="Bates group Logo"
          />
          <img className="powered-by-logo" src={dojahLogo} alt="Dojah Logo" />
          <img
            className="powered-by-logo"
            src={elevateVenturesLogo}
            alt="Elevate Ventures Logo"
          />
          <img
            className="powered-by-logo"
            src={beNimbleCoLogo}
            alt="Be Nimble Co Logo"
          />
          <img className="powered-by-logo" src={googleLogo} alt="Google Logo" />
          <img className="powered-by-logo" src={awsLogo} alt="AWS Logo" />
          <img className="powered-by-logo" src={slackLogo} alt="Slack Logo" />
          <img
            className="powered-by-logo"
            src={safeHeavenLogo}
            alt="Safe Heaven Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
