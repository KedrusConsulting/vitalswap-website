import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

import CurrencyConverter from "../../../components/CurrencyConverter";

function Exchange() {
  return (
    <div className="exchange" id="rates">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="exchange__text-box"
      >
        <h2 className="heading--secondary">Get the best exchange rates</h2>
        <p>Enjoy competitive rates from multiple dealers</p>
        <Link to={"/signup"} className="btn btn--primary">
          Get Started
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="exchange__form-box"
      >
        <Formik>
          {() => (
            <form>
              <CurrencyConverter />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Exchange;
