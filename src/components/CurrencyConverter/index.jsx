import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";

import CurrencyField from "../CurrencyField";

import { headers } from "../../utils/headers";
import CurrencyFormat from "react-currency-format";

function CurrencyConverter({ values, onChange }) {
  const [amountToSend, setAmountToSend] = useState(0);
  const [amountToReceive, setAmountToReceive] = useState(0);
  const [rate, setRate] = useState();

  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(1);
  const [swap, setSwap] = useState(false);

  const currencies = ["NGN", "USD"];

  const updateCurrency = () => {
    console.log("updateCurrency");

    setAmountToSend(0);
    setAmountToReceive(0);

    if (!swap) {
      setSwap(true);
      setCurrency2(0);
      setCurrency1(1);
    } else {
      setSwap(false);
      setCurrency1(0);
      setCurrency2(1);
    }
  };

  const handleAmountToSend = (e) => {
    let receive;

    const input = e.target.value.replace(/[^0-9 ]/g, "");
    setAmountToSend(+input);

    if (!swap) {
      // Naira to Dollar conversion
      receive = +input / rate.iHaveNairaIneedDollars;
    } else {
      // Dollar to Naira conversion
      receive = +input * rate.iHaveDollarsIneedNaira;
    }

    setAmountToReceive(receive.toFixed(2));
  };

  const handleAmountToReceive = (e) => {
    let send;
    const input = e.target.value.replace(/[^0-9 ]/g, "");
    setAmountToReceive(+input);

    if (swap) {
      // Naira to Dollar conversion
      send = +input / rate.iHaveNairaIneedDollars;
    } else {
      // Dollar to Naira conversion
      send = rate.iHaveDollarsIneedNaira * +input;
    }

    console.log(send);

    setAmountToSend(send.toFixed(2));
  };

  const numberFormat = (amount, currency) =>
    new Intl.NumberFormat(navigator.language, {
      currency: currency,
      style: "currency",
    }).format(amount);

  useEffect(() => {
    const getRate = async () => {
      const {
        data: { rate },
      } = await axios.get("https://vitalswap.com/test/api_v2/utils/webHome", {
        headers,
      });

      setRate(rate);
    };

    getRate();
  }, []);

  return (
    <div className="currency__wrapper">
      <CurrencyField
        label="Amount you send"
        // type="number"
        name="amountToSend"
        id="amountToSend"
        placeholder="0"
        value={amountToSend}
        onChange={handleAmountToSend}
        value2={currency1}
        onSelectChange={updateCurrency}
      />

      <div className="currency__rate">
        <span>{`1 USD = ${rate?.iHaveDollarsIneedNaira} NGN`}</span>
      </div>

      <CurrencyField
        label="Amount you receive"
        // type="number"
        name="amountToReceive"
        id="amountToReceive"
        placeholder="0"
        value={amountToReceive}
        onChange={handleAmountToReceive}
        value2={currency2}
        onSelectChange={updateCurrency}
      />
    </div>
  );
}

export default CurrencyConverter;
