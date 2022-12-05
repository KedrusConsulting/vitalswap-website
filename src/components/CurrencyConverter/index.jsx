import React from "react";
import currency_flag_1 from "../../assets/ng-flag.svg";
import currency_flag_2 from "../../assets/us-flag.svg";
import CurrencyField from "../CurrencyField";

function CurrencyConverter() {
  return (
    <div className="currency__wrapper">
      <CurrencyField
        label="Amount you send"
        type="number"
        name="amountToSend"
        id="amountToSend"
        placeholder="0"
        currency={"NGN"}
        value=""
        onChange=""
        countryFlag={currency_flag_1}
      />

      <div className="currency__rate">
        <span>1 NGN = 0.002 USD</span>
      </div>

      <CurrencyField
        label="Amount you receive"
        type="number"
        name="amountToReceive"
        id="amountToReceive"
        placeholder="0"
        currency={"USD"}
        value=""
        onChange=""
        countryFlag={currency_flag_2}
      />
    </div>
  );
}

export default CurrencyConverter;
