import React, { lazy } from "react";

import Footer from "../../components/Footer";
import Loadable from "../../components/Loadable";
import Navigation from "../../components/Navigation";

// import Blog from "./Blog";
// import Exchange from "./Exchange";
// import FAQ from "./FAQ";
// import Features from "./Features";
import Hero from "./Hero";
// import Marketplace from "./Marketplace";
// import Merchant from "./Merchant";
// import Process from "./Process";
// import StepsSection from "./StepsSection";
// import Testimonials from "./Testimonials";

const Blog = Loadable(lazy(() => import("./Blog")));
const FAQ = Loadable(lazy(() => import("./FAQ")));
const Exchange = Loadable(lazy(() => import("./Exchange")));
const Features = Loadable(lazy(() => import("./Features")));
const Marketplace = Loadable(lazy(() => import("./Marketplace")));
const Merchant = Loadable(lazy(() => import("./Merchant")));
const Process = Loadable(lazy(() => import("./Process")));
const StepsSection = Loadable(lazy(() => import("./StepsSection")));
const Testimonials = Loadable(lazy(() => import("./Testimonials")));

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
