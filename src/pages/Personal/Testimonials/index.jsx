import React from "react";

import user_1 from "../../../assets/user-1.png";
import user_2 from "../../../assets/user-2.png";
import user_3 from "../../../assets/user-3.png";
import user_4 from "../../../assets/user-4.png";
import user_5 from "../../../assets/user-5.png";
import user_7 from "../../../assets/user-7.png";
import user_8 from "../../../assets/user-8.png";
import user_9 from "../../../assets/user-9.png";

import TestimonialCard from "../../../components/TestimonialCard";

function Testimonials() {
  return (
    <section className="testimonials__section">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="testimonials__caption"
        >
          <h4 className="heading--caption">Testimonial</h4>
          <h2 className="heading--secondary">What Users says about us</h2>
        </div>

        <div className="testimonials__grid">
          <TestimonialCard
            userName={"Lewis Okomayin"}
            imageUrl={user_1}
            rating={5}
            review="This is as good as it would ever get. This app is a game changer in the payment and money transfer space. I love it!"
          />

          <TestimonialCard
            userName={"Ehinola Kingsley"}
            imageUrl={user_9}
            rating={5}
            review="A very good app. Quick with transactions without delay. A very cheap charge rate compared to its rivals. Love it so much."
          />

          <TestimonialCard
            userName={"Oluhadey Adey"}
            imageUrl={user_8}
            rating={5}
            review="The App is easy to use, transactions are fast, and the cutomer support is great. I can finally authorize zelle transfers and pay Copart and Ghanem."
          />

          <TestimonialCard
            userName={"Iyke Nwajesus"}
            imageUrl={user_4}
            rating={5}
            review="One of the things I really love about this app is the exchange rates it offers. I mean, I can now transfer money from my Dollar account to my Naira account instantly."
          />

          <TestimonialCard
            userName={"Stella Justin"}
            imageUrl={user_5}
            rating={5}
            review="Making and receiving payments has never been easier. The fact that you can make foreign payments with your local currency is thrilling."
          />

          <TestimonialCard
            userName={"Afolasade Ola"}
            imageUrl={user_7}
            rating={5}
            review="I was referred to this app to make a payment. Customer relation was great and the process was credible."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
