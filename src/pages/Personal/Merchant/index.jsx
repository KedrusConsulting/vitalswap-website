import React from "react";
import SplitScreen from "../../../components/SplitScreen";
import openDollarAccountImg from "../../../assets/open-dollar-account-mockup.png";
import manageWalletimg from "../../../assets/manage-wallet-mockup.png";
import globalPaymentImg from "../../../assets/global-payment-mockup.png";

const Merchant = () => {
  return (
    <section className="merchant">
      <div className="container">
        <div className="merchant__caption">
          <h2>
            Pay both local and international merchants with your local currency
            on VitalSwap.
          </h2>
        </div>

        <div className="open-dollar-account">
          <SplitScreen>
            <div className="open-dollar-account__left">
              <h3>Open a Free Dollar Account and Receive Same-Day Payments</h3>
              <p>
                Freelancers or gig workers can now receive payments instantly
                upon transaction completion. Access your funds immediately to
                keep your business running smoothly and efficiently.
              </p>

              <button type="button" className="btn btn--primary">
                Download App
              </button>
            </div>

            <div className="open-dollar-account__right">
              <img
                src={openDollarAccountImg}
                alt="Open dollar account mockup"
              />
            </div>
          </SplitScreen>
        </div>

        <div className="global-payment">
          <SplitScreen>
            <div className="global-payment__left">
              <img src={globalPaymentImg} alt="Global payment mockup" />
            </div>
            <div className="global-payment__right">
              <h3>Global payment </h3>
              <p>
                VitalSwap makes international transactions quick, easy and
                secure. Whether for business, property, or supporting loved
                ones, our service simplifies transfers.
              </p>

              <button type="button" className="btn btn--primary">
                Download App
              </button>
            </div>
          </SplitScreen>
        </div>

        <div className="manage-wallet">
          <SplitScreen>
            <div className="manage-wallet__left">
              <h3>Manage your wallet, safe and secure</h3>
              <p>
                Enable your customers to hold funds, pay bills, earn yield, and
                manage cash flow.
              </p>
              <button type="button" className="btn btn--primary">
                Download App
              </button>
            </div>
            <div className="manage-wallet__right">
              <img src={manageWalletimg} alt="Manage wallet mockup" />
            </div>
          </SplitScreen>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
