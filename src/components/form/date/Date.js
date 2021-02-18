import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Date = (props) => {
  const { name, errors, label, ...rest } = props;
  const { field } = useController(props);
  const { value, onChange, onBlur } = field;
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <ReactDatePicker
        id={name}
        name={name}
        {...field}
        {...rest}
        selected={value}
        onchange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Date;