import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const Select = (props) => {
  const { name, type, errors, label, options, ...rest } = props;
  const { field } = useController(props);
  return (
    <div>
      <select name={name} {...field} id={name}>
        {options ||
          [].map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
