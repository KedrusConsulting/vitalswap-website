import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import GetInTouch from "../../components/GetInTouch";

const Business = () => {
  return (
    <>
      <header className="header header--business">
        <Navigation />
      </header>

      <main className="main">
        <FAQ />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
};

export default Business;
