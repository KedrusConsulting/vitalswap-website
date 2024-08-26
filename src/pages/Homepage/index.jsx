import React from "react";
import Navigation from "../../components/Navigation";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <header className="header header--home">
        <Navigation />
        <Hero />
      </header>
      ;
    </>
  );
};

export default HomePage;
