import React from "react";

function RateCard({ amtToSend, amtToReceive, rate, currency, symbol }) {
  return (
    <div className="rate__card">
      <div className="rate__send">
        <div className="rate__left">
          <span className="label">Amount to send</span>
          <span className="atm">{`${symbol}${amtToSend}`}</span>
        </div>

        <div className="rate__right">
          <span className="rate">Exchange Rate</span>
          <span className="atm">1 USD = {rate} NGN</span>
        </div>
      </div>

      <div className="rate__receive">
        <div className="rate__left">
          <span className="label">Amount you'll be pay</span>
          <span className="atm">
            {amtToReceive} <span className="rate__btn">Splittable</span>
          </span>
        </div>

        <div className="rate__right">
          <span className="rate__cta">
            <span>Buy Dollar</span>
            <img src={currency} alt="USD svg" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default RateCard;
