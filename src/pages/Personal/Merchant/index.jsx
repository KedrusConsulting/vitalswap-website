import React from "react";
import SplitScreen from "../../../components/SplitScreen";
import openDollarAccountImg from "../../../assets/open-dollar-account-mockup.webp";
import manageWalletimg from "../../../assets/manage-wallet-mockup.webp";
import globalPaymentImg from "../../../assets/global-payment-mockup.webp";

const Merchant = () => {
  return (
    <section className="merchant">
      <div className="container">
        <div className="merchant__caption">
          <h2 data-aos="fade-up">
            Pay both local and international merchants with your local currency
            on VitalSwap.
          </h2>
        </div>

        <div className="open-dollar-account">
          <SplitScreen>
            <div className="open-dollar-account__left">
              <h3 data-aos="fade-right">
                Open a Free Dollar Account and Receive Same-Day Payments
              </h3>
              <p data-aos="fade-right">
                Freelancers or gig workers can now receive payments instantly
                upon transaction completion. Access your funds immediately to
                keep your business running smoothly and efficiently.
              </p>

              <button
                type="button"
                className="btn btn--primary"
                data-aos="fade-right"
              >
                Download App
              </button>
            </div>

            <div
              className="open-dollar-account__right"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                src={openDollarAccountImg}
                alt="Open dollar account mockup"
              />
            </div>
          </SplitScreen>
        </div>

        <div className="global-payment">
          <SplitScreen>
            <div className="global-payment__left" data-aos="fade-right">
              <img src={globalPaymentImg} alt="Global payment mockup" />
            </div>
            <div className="global-payment__right">
              <h3 data-aos="fade-left">Make global payments </h3>
              <p data-aos="fade-left">
                VitalSwap makes international transactions quick, easy and
                secure. Whether for business supporting loved ones, our service
                simplifies transfers.
              </p>

              <button
                type="button"
                className="btn btn--primary"
                data-aos="fade-left"
              >
                Download App
              </button>
            </div>
          </SplitScreen>
        </div>

        <div className="manage-wallet">
          <SplitScreen>
            <div className="manage-wallet__left">
              <h3 data-aos="fade-right">
                Manage your wallet without security risks.
              </h3>
              <p data-aos="fade-right">
                VitalSwap wallet enables you to hold funds, pay bills, earn
                yield, and manage cash flow without security concerns.
              </p>
              <button
                type="button"
                className="btn btn--primary"
                data-aos="fade-right"
              >
                Download App
              </button>
            </div>

            <div className="manage-wallet__right" data-aos="fade-left">
              <img src={manageWalletimg} alt="Manage wallet mockup" />
            </div>
          </SplitScreen>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
