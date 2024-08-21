import React, { lazy } from "react";

import Footer from "../../components/Footer";
import Loadable from "../../components/Loadable";
import Navigation from "../../components/Navigation";

import Hero from "./Hero";

const Blog = Loadable(lazy(() => import("./Blog")));
const FAQ = Loadable(lazy(() => import("./FAQ")));
const Exchange = Loadable(lazy(() => import("./Exchange")));
const Marketplace = Loadable(lazy(() => import("./Marketplace")));
const StepsSection = Loadable(lazy(() => import("./StepsSection")));
const Merchant = Loadable(lazy(() => import("./Merchant")));
const VirtualCard = Loadable(lazy(() => import("./VirtualCard")));
const Testimonials = Loadable(lazy(() => import("./Testimonials")));

function Personal() {
  return (
    <>
      <header className="header">
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

        <StepsSection />

        <Testimonials />
        <FAQ />
        <Blog />
        <Marketplace />
        <Footer />
      </main>
    </>
  );
}

export default Personal;
