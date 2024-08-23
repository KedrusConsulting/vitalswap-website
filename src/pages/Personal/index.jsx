import React, { lazy } from "react";

import Footer from "../../components/Footer";
import Loadable from "../../components/Loadable";
import Navigation from "../../components/Navigation";

import Hero from "./Hero";
import GetInTouch from "../../components/GetInTouch";
import Features from "./Features";

const Blog = Loadable(lazy(() => import("./Blog")));
const FAQ = Loadable(lazy(() => import("../../components/FAQ")));
const Exchange = Loadable(lazy(() => import("./Exchange")));
const Marketplace = Loadable(lazy(() => import("./Marketplace")));
const StepsSection = Loadable(lazy(() => import("./StepsSection")));
const Merchant = Loadable(lazy(() => import("./Merchant")));
const VirtualCard = Loadable(lazy(() => import("./VirtualCard")));
const Testimonials = Loadable(lazy(() => import("./Testimonials")));

function Personal() {
  return (
    <>
      <header className="header header--personal">
        <Navigation />
        <Hero />
      </header>

      <main className="main">
        <VirtualCard />
        <Merchant />

        <section className="get-exchange secure-process">
          <div className="container">
            <Exchange />
          </div>
        </section>
        <Features />

        <StepsSection />

        <Testimonials />
        <FAQ />
        <GetInTouch />
        <Blog />
        <Marketplace />
        <Footer />
      </main>
    </>
  );
}

export default Personal;
