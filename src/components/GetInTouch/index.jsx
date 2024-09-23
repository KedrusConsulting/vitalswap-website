import React from "react";
import userImg01 from "../../assets/user-3.png";
import userImg02 from "../../assets/user-5.png";
import userImg03 from "../../assets/user-7.png";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="get-in-touch__inner" data-aos="fade-up">
          <div className="avatars">
            <div className="avatar avatar--1">
              <img src={userImg01} alt="User avatar" />
            </div>

            <div className="avatar avatar--2">
              <img src={userImg02} alt="User avatar" />
            </div>

            <div className="avatar avatar--3">
              <img src={userImg03} alt="User avatar" />
            </div>
          </div>
          <h4>Still have questions?</h4>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>

          <button className="btn btn--secondary">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
