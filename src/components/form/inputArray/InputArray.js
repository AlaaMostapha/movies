import React, { useState } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const InputArray = (props) => {
  const { name, errors, label, register, ...rest } = props;
  const [indexes, setIndexes] = React.useState([1]);
  const [counter, setCounter] = React.useState(2);
  const addField = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeField = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
        {props.astric && <span className="error">*</span>}
      </div>
      {indexes.map((index) => {
        console.log("index", index);
        return (
          <>
            <input
              type="text"
              className="col-7 mr-2 mb-2"
              name={`${name}[${index}].name`}
              key={index}
              ref={register}
              {...rest}
            />
            {index > 1 && (
              <button
                type="button"
                className="col-2 mr-2"
                onClick={removeField(index)}
              >
                -
              </button>
            )}
            {index === 1 && (
              <button type="button" className="col-2 mr-2" onClick={addField}>
                +
              </button>
            )}
          </>
        );
      })}

      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default InputArray;
