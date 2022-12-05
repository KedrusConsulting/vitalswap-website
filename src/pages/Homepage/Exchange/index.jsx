import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CurrencyConverter from "../../../components/CurrencyConverter";

function Exchange() {
  const [position, setPosition] = useState(false);
  const { innerWidth: width } = window;

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > "768" && setPosition(false);
      window.innerWidth <= "768" && setPosition(true);
    });
  }, []);
  return (
    <div className="exchange" id="rates">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="exchange__text-box"
      >
        <h2 className="heading--secondary">Get the best exchange rates</h2>
        <p>Enjoy competitive rates from multiple dealers</p>

        <div className="form_box-mob">
          <Formik>
            {() => (
              <form>
                <CurrencyConverter />
              </form>
            )}
          </Formik>
        </div>

        <Link to={"/signup"} className="btn btn--primary mt-4">
          Get Started
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="exchange__form-box"
      >
        <div className="form_box-desk">
          <Formik>
            {() => (
              <form>
                <CurrencyConverter />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
