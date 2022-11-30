import React from "react";

function Select({ label, id, name, onChange, options, value, errorMessage }) {
  return (
    <fieldset className="inputfield__group">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>

      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="inputfield__select"
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* {} */}
    </fieldset>
  );
}

export default Select;
