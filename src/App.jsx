import React, { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import Loadable from "./components/Loadable";

const HomePage = Loadable(lazy(() => import("./pages/HomePage")));
const Business = Loadable(lazy(() => import("./pages/Business")));
const Personal = Loadable(lazy(() => import("./pages/Personal")));
const SignUp = Loadable(lazy(() => import("./pages/SignUp")));
const Terms = Loadable(lazy(() => import("./pages/Terms")));
const Privacy = Loadable(lazy(() => import("./pages/Privacy")));

function App() {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="vitalswap">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/personal" element={<Personal />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
