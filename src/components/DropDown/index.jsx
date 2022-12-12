import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import currency_flag_1 from "../../assets/ng-flag.svg";
import currency_flag_2 from "../../assets/us-flag.svg";

const CurrencyDropdown = ({ defaultValue, handleChange }) => {
  const currrencyOptions = [
    {
      key: "NGN",
      text: "NGN",
      value: "NGN",
      image: { avatar: true, src: currency_flag_1 },
    },
    {
      key: "USD",
      text: "USD",
      value: "USD",
      image: { avatar: true, src: currency_flag_2 },
    },
  ];

  return (
    <Dropdown
      inline
      options={currrencyOptions}
      defaultValue={currrencyOptions[defaultValue].value}
      onChange={handleChange}
    />
  );
};

export default CurrencyDropdown;
