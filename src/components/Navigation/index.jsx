import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavLink from "../NavLink";
import getDownloadAppUrl from "../../utils/getDownloadAppUrl";

function Navigation() {
  const [open, setOpen] = useState(false);
  const downloadURL = getDownloadAppUrl();

  useEffect(() => {
    (function (d, w, c) {
      w.BrevoConversationsID = "613fed0170e3861a7377a46a";
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      var s = d.createElement("script");
      s.async = true;
      s.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "BrevoConversations");
  }, []);

  useEffect(() => {
    window.BrevoConversationsSetup = {
      customWidgetButton: ".custom-chat-button",
      chatWidth: 400,
      chatHeight: 550,
    };
  }, []);

  const handleGetInTouch = (e) => {
    e.preventDefault();

    if (window.BrevoConversations) {
      window.BrevoConversations("openChat", true);
    } else {
      console.log("Brevo Conversations widget is not loaded yet.");
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <Logo />
          </div>

          <ul
            className={`navbar__list ${open ? "open" : ""}`}
            onClick={() => setOpen(false)}
          >
            <NavLink
              route="https://blog.vitalswap.com/how-it-works"
              label="How it Works"
            />
            <NavLink
              route="https://blog.vitalswap.com/vitalswap-rate/"
              label="Our Rates"
            />
            <NavLink route="https://blog.vitalswap.com" label="Blog" />
            <NavLink route="https://blog.vitalswap.com/faq/" label="FAQ" />

            <NavLink
              onClick={handleGetInTouch}
              route="#contact"
              label="Contact Us"
            />
          </ul>

          <a
            href={downloadURL}
            className="navbar__cta btn btn--primary"
            target="_blank"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
