import React, { useEffect, useRef } from "react";
import enter_amount_screen from "../../../assets/slider-@1x.png";
import destination_currency_screen from "../../../assets/slider-2@1x.png";
import sendto_recip_screen from "../../../assets/slider-3@1x.png";

function StepsSection() {
  const imgsContainerRef = useRef();
  const cardsContainerRef = useRef();

  // const repositionImg = () => {
  //   let curImg;

  //   const imgs = Array.from(
  //     imgsContainerRef.current.querySelectorAll("[class^=steps__img")
  //   );

  //   imgs.map((img) => {
  //     img.classList.remove("steps__img--active");
  //   });

  //   const curStep = document.querySelector(".steps__card--active").dataset.card;
  //   const curStepElem = document.querySelector(".steps__card--active");

  //   curImg = document.querySelector(`[data-img="${curStep}"]`);

  //   // const fragment = document.createDocumentFragment();
  //   // imgs.forEach(function (item) {
  //   //   fragment.appendChild(item.cloneNode());
  //   // });

  //   // console.log(fragment.childNodes);

  //   curStepElem.insertAdjacentElement("afterend", curImg);
  // };

  useEffect(() => {
    let cur = 0;
    const stepsCard = Array.from(
      cardsContainerRef.current.querySelectorAll(".steps__card")
    );

    const stepsImg = Array.from(
      imgsContainerRef.current.querySelectorAll("[class^=steps__img")
    );

    setInterval(() => {
      if (cur < stepsCard.length - 1) {
        cur++;
      } else {
        cur = 0;
      }

      stepsCard.map((card, i) => {
        card.classList.remove("steps__card--active");
      });

      stepsImg.map((img, i) => {
        img.classList.remove("steps__img--active");
      });

      stepsCard[cur].classList.add("steps__card--active");
      stepsImg[cur].classList.add("steps__img--active");
    }, 4000);
  }, []);

  // const handleSteps = (e) => {
  //   const elem = e.target.closest(".steps__card");
  //   let curImg;

  //   const steps = Array.from(
  //     cardsContainerRef.current.querySelectorAll(".steps__card")
  //   );

  //   const imgs = Array.from(
  //     imgsContainerRef.current.querySelectorAll("[class^=steps__img")
  //   );

  //   if (elem) {
  //     steps.map((step) => {
  //       step.classList.remove("steps__card--active");
  //     });

  //     elem.classList.add("steps__card--active");

  //     imgs.map((img) => {
  //       img.classList.remove("steps__img--active");

  //       const curStep = document.querySelector(".steps__card--active").dataset
  //         .card;
  //       curImg = document.querySelector(`[data-img="${curStep}"]`);
  //     });

  //     curImg?.classList.add("steps__img--active");
  //   }

  //   // if (window.innerWidth <= "768") {
  //   //   repositionImg();
  //   // }
  // };

  return (
    <section className="steps__section" id="how-it-works">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="steps__caption"
        >
          <h2 className="heading--secondary">
            Send money to friends and family in 3 simple steps.
          </h2>
        </div>

        <div
          className="steps__container"
          // onClick={handleSteps}
          ref={cardsContainerRef}
        >
          <div className="steps__text-box">
            <div
              data-card="1"
              data-aos="fade-up"
              data-aos-duration="2000"
              className="steps__card steps__card--active"
            >
              <h4 className="heading--quad">
                1. Enter amount you wish to send
              </h4>
              <p>
                Once you have signed up, add an amount you have to send, and hit
                the EasySend button.
              </p>
            </div>

            <div
              data-card="2"
              data-aos="fade-up"
              data-aos-duration="2000"
              className="steps__card"
            >
              <h4 className="heading--quad">
                2. Choose a destination currency
              </h4>
              <p>
                Select the destination currency, and VitalSwap EasySend will
                help you select the best rates in the market.
              </p>
            </div>

            <div
              data-card="3"
              data-aos="fade-up"
              data-aos-duration="2000"
              className="steps__card"
            >
              <h4 className="heading--quad">3. Send to recipients</h4>
              <p>
                Select send to yourself or someone else and funds will be
                delivered in seconds.
              </p>
            </div>
          </div>
          <div
            ref={imgsContainerRef}
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="steps__img-box"
          >
            <div className="steps__img--1 steps__img--active" data-img="1">
              <img
                src={enter_amount_screen}
                alt="Vitalswap send money app screen"
              />
            </div>

            <div className="steps__img--2" data-img="2">
              <img
                src={destination_currency_screen}
                alt="Vitalswap destination currency app screen"
              />
            </div>

            <div className="steps__img--3" data-img="3">
              <img
                src={sendto_recip_screen}
                alt="Vitalswap send to recipient app screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
