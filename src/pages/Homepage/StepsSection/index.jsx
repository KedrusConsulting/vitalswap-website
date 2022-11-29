import React from "react";
import enter_amount_screen from "../../../assets/slider-@1x.png";
import destination_currency_screen from "../../../assets/slider-2@1x.png";
import sendto_recip_screen from "../../../assets/slider-@1x.png";

function StepsSection() {
  return (
    <section className="steps__section">
      <div className="container">
        <div className="steps__caption">
          <h2 className="heading--secondary">
            Send money to friends and family in 3 simple steps.
          </h2>
        </div>

        <div className="steps__container">
          <div className="steps__text-box">
            <div className="steps__card steps__card--active">
              <h4 className="heading--quad">
                1. Enter an amount you want to send
              </h4>
              <p>Sign up in 3 easy steps to add money to your account.</p>
            </div>

            <div className="steps__card">
              <h4 className="heading--quad">
                2. Choose your destination currency
              </h4>
              <p>Choose the best rates available on the marketplace.</p>
            </div>

            <div className="steps__card">
              <h4 className="heading--quad">3. Send to recipient</h4>
              <p>
                Send money to anywhere in the world straight from your account.
              </p>
            </div>
          </div>
          <div className="steps__img-box">
            <div className="steps__img--1 steps__img--active">
              <img
                src={enter_amount_screen}
                alt="Vitalswap send money app screen"
              />
            </div>

            <div className="steps__img--2">
              <img
                src={destination_currency_screen}
                alt="Vitalswap destination currency app screen"
              />
            </div>

            <div className="steps__img--3">
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
