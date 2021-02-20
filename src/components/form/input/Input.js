import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const Input = (props) => {
  const { name, type, errors, label, control, ...rest } = props;
  const { field } = useController(props);
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input type={type} name={name} {...field} />
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Input;
