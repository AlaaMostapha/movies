import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
import Button from "@material-ui/core/Button";
const Input = (props) => {
  const { name, type, errors, label, control, register, ...rest } = props;
  // const { field } = useController(props);
  return (
    <div className="mb-2">
      <div>
        <label htmlFor={name} className="labelStyle">
          {label}
        </label>
        {props.astric && <span className="error">*</span>}
      </div>
      {/* this commented code cause an issue about input type=file 
      it send value as name only and not whole obj */}
      {/* <Controller
        name={name}
        control={control}
        {...rest}
        render={({ onChange, value }) => (
          <input onChange={onChange} value={value} type={type} />
        )}
      /> */}
      <input type={type} name={name} ref={register} {...rest} />
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Input;
