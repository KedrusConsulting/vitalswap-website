import React from "react";

import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Blog from "./Blog";
import Exchange from "./Exchange";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";
import Marketplace from "./Marketplace";
import Merchant from "./Merchant";
import Process from "./Process";
import StepsSection from "./StepsSection";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <>
      <header className="header">
        <Navigation />
        <Hero />
      </header>

      <main className="main">
        <StepsSection />

        <section className="get-exchange secure-process">
          <div className="container">
            <Exchange />
            <Process />
          </div>
        </section>

        <Merchant />
        <Features />
        <Testimonials />
        <Blog />
        <FAQ />
        <Marketplace />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
