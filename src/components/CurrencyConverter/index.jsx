import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import CurrencyField from "../CurrencyField";

import { headers } from "../../utils/headers";

function CurrencyConverter({ values, onChange }) {
  const [amountToSend, setAmountToSend] = useState(0);
  const [amountToReceive, setAmountToReceive] = useState(0);
  const [rate, setRate] = useState();

  const [ngn, setNgn] = useState(0);
  const [usd, setUsd] = useState(1);

  const handleAmountToSend = (e) => {
    setAmountToSend(e.target.value);

    const receive = e.target.value / rate.iHaveDollarsIneedNaira;
    setAmountToReceive(receive.toFixed(1));
  };

  const handleAmountToReceive = (e) => {
    setAmountToSend(e.target.value);
  };

  const handleCheckRates = () => {
    console.log("");
  };

  useEffect(() => {
    const getRate = async () => {
      const {
        data: { rate },
      } = await axios.get("https://vitalswap.com/test/api_v2/utils/webHome", {
        headers,
      });
      console.log(rate);

      setRate(rate);
    };

    getRate();
  }, []);

  return (
    <div className="currency__wrapper">
      <CurrencyField
        label="Amount you send"
        type="number"
        name="amountToSend"
        id="amountToSend"
        placeholder="0"
        currency={"NGN"}
        value={amountToSend}
        onChange={handleAmountToSend}
        handleChange={handleCheckRates}
        defaultValue={ngn}
      />

      <div className="currency__rate">
        <span>{`1 USD = ${rate?.iHaveDollarsIneedNaira} NGN`}</span>
      </div>

      <CurrencyField
        label="Amount you receive"
        type="number"
        name="amountToReceive"
        id="amountToReceive"
        placeholder="0"
        currency={"USD"}
        value={amountToReceive}
        onChange={handleAmountToReceive}
        defaultValue={usd}
      />
    </div>
  );
}

export default CurrencyConverter;
