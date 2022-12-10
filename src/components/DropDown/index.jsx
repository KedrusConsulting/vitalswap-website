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
    <Dropdown
      inline
      options={currrencyOptions}
      defaultValue={currrencyOptions[0].value}
    />
  );
};

export default CurrencyDropdown;
