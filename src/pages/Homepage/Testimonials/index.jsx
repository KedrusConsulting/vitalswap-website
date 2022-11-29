import React from "react";

import user_1 from "../../../assets/user-1.png";
import user_2 from "../../../assets/user-2.png";
import user_3 from "../../../assets/user-3.png";
import user_4 from "../../../assets/user-4.png";
import user_5 from "../../../assets/user-5.png";
import user_6 from "../../../assets/user-6.png";
import TestimonialCard from "../../../components/TestimonialCard";

function Testimonials() {
  return (
    <section className="testimonials__section">
      <div className="container">
        <div className="testimonials__caption">
          <h4 className="heading--caption">Testimonial</h4>
          <h2 className="heading--secondary">What Users says about us</h2>
        </div>

        <div className="testimonials__grid">
          <TestimonialCard
            userName={"Ogunmola Ebenezer"}
            imageUrl={user_1}
            rating={5}
            review="This app is awesome and easy to navigate. I used it to receive my
            payment for work done. So fast in payment delivery."
          />

          <TestimonialCard
            userName={"Ehinola Kingsley"}
            imageUrl={user_2}
            rating={5}
            review="A very good app. Quick with transactions without delay. A very cheap charge rate compared to itsrivals. Love it so much."
          />

          <TestimonialCard
            userName={"Justin Tochukwu"}
            imageUrl={user_3}
            rating={5}
            review="Amazing experience, my transaction was seamlessly, when I initiated a transfer from my wallet my bank wqs creditd in seconds kudos."
          />

          <TestimonialCard
            userName={"Iyke Nwajesus"}
            imageUrl={user_4}
            rating={5}
            review="One of the things I really love about this app is the exchange rates it offers. I mean, I can now transfer money from my Dollar account to my Naira account instantly."
          />

          <TestimonialCard
            userName={"Afolasade Ola"}
            imageUrl={user_5}
            rating={5}
            review="I was referred to this app to make a payment. Customer relation was great and the process was credible."
          />

          <TestimonialCard
            userName={"Kehinde Kenny"}
            imageUrl={user_6}
            rating={5}
            review="I was impressed with how efficient and fast this app is in buying naira or dollars. I give it a 5 star."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
