import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const Input = (props) => {
  const { name, type, errors, label, ...rest } = props;
  const { field } = useController(props);
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input {...field} type={type} name={name} />
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Input;
