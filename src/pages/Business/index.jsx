import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import GetInTouch from "../../components/GetInTouch";
import PoweredBy from "../../components/PoweredBy";
import VSBusiness from "./VSBusiness";
import Hero from "./Hero";

const Business = () => {
  return (
    <>
      <header className="header header--business">
        <Navigation />

        <Hero />
      </header>

      <main className="main">
        <section className="powered-by__section">
          <PoweredBy />
        </section>

        <VSBusiness />

        <FAQ />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
};

export default Business;
