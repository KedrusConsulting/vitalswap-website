import React, { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import Loadable from "./components/Loadable";

const HomePage = Loadable(lazy(() => import("./pages/Home")));

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
      </Routes>
    </div>
  );
}

export default App;
