import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const SelectArray = (props) => {
  const { name, type, errors, label, options, register, ...rest } = props;
  //  const { field } = useController(props);
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
      <label htmlFor={name}>{label}</label>
      {props.astric && <span className="error">*</span>}
      {indexes.map((index) => {
        return (
          <div className="mb-2" key={index}>
            <select
              className="col-7 mr-2"
              name={`${name}[${index}].name`}
              key={index}
              ref={register}
            >
              {options.map((option, index) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
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
          </div>
        );
      })}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default SelectArray;
