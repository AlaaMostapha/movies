import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
import Btn from "../../btn/Btn";
const SelectArray = (props) => {
  const {
    name,
    type,
    errors,
    label,
    options,
    control,
    defaultValue,
    ...rest
  } = props;
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });
   const removeFun = (index) => {
     if (fields.length != 1) {
       remove(index);
     } else {
       alert("genre field is rquired");
     }
   };
  return (
    <div className="mb-2">
      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor={name} className="labelStyle">
            {label}
          </label>
          {props.astric && <span className="error">*</span>}
        </div>
        <div className="col-6">
          <Btn
            className="addNewBtn w-100"
            type="button"
            onClick={() => append("")}
            text="Add New Genre"
          />
        </div>
      </div>
      {fields.map((item, index) => {
        return (
          <div className="row mb-2 mx-2" key={item.id}>
            <div className="col-8">
              <Controller
                defaultValue={options[0]?.value ? options[0].value : "Action"}
                render={({ value, onChange, onBlur }) => {
                  return (
                    <select
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                      }}
                    >
                      {options.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  );
                }}
                name={`${name}[${index}].name`}
                control={control}
              />
            </div>
            <div className="col-3">
              <Btn
                className="removeBtn"
                type="button"
                onClick={() => removeFun(index)}
                text="Remove"
              />
            </div>
          </div>
        );
      })}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default SelectArray;
