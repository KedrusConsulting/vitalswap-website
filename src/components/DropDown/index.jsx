import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

import currency_flag_1 from "../../assets/ng-flag.svg";
import currency_flag_2 from "../../assets/us-flag.svg";

const CurrencyDropdown = ({ value, handleChange }) => {
  const currrencyOptions = [
    {
      key: "USD",
      text: "USD",
      value: "USD",
      image: { avatar: true, src: currency_flag_2 },
    },

    {
      key: "NGN",
      text: "NGN",
      value: "NGN",
      image: { avatar: true, src: currency_flag_1 },
    },
  ];

  return (
    <Dropdown
      inline
      options={currrencyOptions}
      value={currrencyOptions[value].value}
      onChange={handleChange}
    />
  );
};

export default CurrencyDropdown;
