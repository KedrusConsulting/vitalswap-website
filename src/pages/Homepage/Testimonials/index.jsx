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
            imageUrl={user_2}
            rating={5}
            review="A very good app. Quick with transactions without delay. A very cheap charge rate compared to its rivals. Love it so much."
          />

          <TestimonialCard
            userName={"Justin Tochukwu"}
            imageUrl={user_3}
            rating={5}
            review="Amazing experience, my transaction was seamless, when I initiated a transfer from my wallet my bank wqs creditd in seconds, kudos."
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
            userName={"Ebenezer Ogunmola"}
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
