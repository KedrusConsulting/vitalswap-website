import React from "react";
import FAQCard from "../../../components/FAQCard";

function FAQ() {
  return (
    <section className="faq__section">
      <div className="container">
        <div className="faq__caption">
          <h4 className="heading--caption">FAQs</h4>
          <h2 className="heading--secondary">
            We Answered some of your questions
          </h2>
        </div>

        <div className="faq__container">
          <FAQCard
            title={"What is Vitalswap?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally."
          />

          <FAQCard
            title={"What is your transcation fee?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally. VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally."
          />

          <FAQCard
            title={"How does it work?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally. VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally."
          />

          <FAQCard
            title={"How fast can I withdraw to my bank?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally. VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally."
          />

          <FAQCard
            title={"How long does it take to send money or make Payment?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally. "
          />

          <FAQCard
            title={"How do I download the app?"}
            body="VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally. VitalSwap provides an all in one payment solution for anyone who needs to send money and make payments internationally and locally."
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
