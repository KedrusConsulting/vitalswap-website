import React, { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import Loadable from "./components/Loadable";

const HomePage = Loadable(lazy(() => import("./pages/Home")));
const Business = Loadable(lazy(() => import("./pages/Business")));
const Personal = Loadable(lazy(() => import("./pages/Personal")));
const SignUp = Loadable(lazy(() => import("./pages/SignUp")));
const SignIn = Loadable(lazy(() => import("./pages/SignIn")));
const Terms = Loadable(lazy(() => import("./pages/Terms")));
const Privacy = Loadable(lazy(() => import("./pages/Privacy")));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });

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
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
