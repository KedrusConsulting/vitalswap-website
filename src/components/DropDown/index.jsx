import React from "react";
import { Dropdown } from "semantic-ui-react";

const CurrencyDropdown = () => {
  const currrencyOptions = [
    {
      key: "NGN",
      text: "NGN",
      value: "NGN",
      image: { avatar: true, src: "/public/ng-flag.svg" },
    },
    {
      key: "USD",
      text: "USD",
      value: "USD",
      image: { avatar: true, src: "/public/us-flag.svg" },
    },
  ];

  return (
    <ul>
      <li>
        <span className="currency__currency">{currrencyOptions[0].text}</span>

        <img src={currrencyOptions[0].image.src} alt="currency__flag" />
      </li>

      <ul>
        {currrencyOptions.map((option) => (
          <li>
            <span className="currency__currency">{option.text}</span>

            <img src={option.image.src} alt="currency__flag" />
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default CurrencyDropdown;
