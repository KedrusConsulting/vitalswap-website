import React from "react";
import { Link } from "react-router-dom";

function Exchange() {
  return (
    <div className="exchange">
      <div className="exchange__text-box">
        <h2 className="heading--secondary">Get the best exchange rates</h2>
        <p>Enjoy competitive rates from multiple dealers</p>
        <Link to={"#"} className="btn btn--primary">
          Get Started
        </Link>
      </div>

      <div className="exchange__form-box"></div>
    </div>
  );
}

export default Exchange;
