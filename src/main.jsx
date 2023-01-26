import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

import "swiper/css";
import "swiper/css/pagination";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.scss";
import "aos/dist/aos.css";
import AppProvider from "./context/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
