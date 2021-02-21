import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const Input = (props) => {
  const { name, type, errors, label, control, register, ...rest } = props;
  // const { field } = useController(props);
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input type={type} name={name} ref={register} {...rest} />
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Input;
