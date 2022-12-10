import React from "react";
import { Link } from "react-router-dom";

import copart_logo from "../../../assets/merchant-Copart.svg";
import merchantiaa_logo from "../../../assets/merchant-iaa1.svg";
import comtech_logo from "../../../assets/comtech.svg";
import ghanem_logo from "../../../assets/ghanem.svg";

function Merchant() {
  return (
    <section className="merchant__section">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="2000" className="merchant">
          <div className="merchant__text-box">
            <h2 className="heading--secondary">
              Do you receive payments as a foreign merchants from Africa?
            </h2>

            <p>
              Are you loosing revenue due exchange rates when you receive
              payments from Africa? Get VitalSwap for business and receive
              payments from Africa in your local currency.
            </p>

            <Link to="/signup" className="btn btn--white">
              Get Started for Business
            </Link>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="merchant__logos"
          >
            <figure>
              <img src={copart_logo} alt="Copart Logo" />
            </figure>

            <figure>
              <img src={merchantiaa_logo} alt="Merchant iaa Logo" />
            </figure>

            <figure>
              <img src={comtech_logo} alt="Comtech Logo" />
            </figure>

            <figure>
              <img src={ghanem_logo} alt="Ghenem Logo" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Merchant;
