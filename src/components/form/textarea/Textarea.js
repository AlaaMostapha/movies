import React, { useState } from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const Textarea = (props) => {
  const { name, type, errors, label, ...rest } = props;
  const { field } = useController(props);
  let [charCount, setCharCount] = useState(0);
  const countChars = (e) => {
    setCharCount(e.target.value.length);
  };
  return (
    <div className="mb-2">
      <div>
        <label htmlFor={name} className="labelStyle">
          {label}
        </label>
        {props.astric && <span className="error">*</span>}
      </div>
      <textarea
        {...rest}
        name={name}
        {...field}
        rows="5"
        cols="30"
        onKeyUp={(e) => countChars(e)}
      ></textarea>
      <p className="text-right mb-0">{charCount}/500</p>
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default Textarea;
