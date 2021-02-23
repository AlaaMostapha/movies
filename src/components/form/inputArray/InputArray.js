import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
import Btn from "../../btn/Btn";
const InputArray = (props) => {
  const { name, errors, label, control, ...rest } = props;
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });
  const removeFun = (index) => {
    if (fields.length != 1) {
      remove(index);
    } else {
      alert("actor field is rquired");
    }
  };
  return (
    <div className="mb-2">
      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor={name} className="labelStyle">
            {label}:
          </label>
          {props.astric && <span className="error"> *</span>}
        </div>
        <div className="col-6">
          <Btn
            className="addNewBtn w-100 mb-2"
            type="button"
            onClick={() => append("")}
            text="Add New Actor"
          />
        </div>
      </div>
      {fields.map((field, index) => (
        <div className="mb-2 row mx-2" key={index}>
          <div className="col-8">
            <Controller
              render={({ value, onChange }) => {
                return (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
                );
              }}
              defaultValue={field.name}
              key={field.id} // important to include key with field's id
              id={field.id}
              name={`${name}[${index}].name`}
              control={control}
             
            />
          </div>
          {/* {index > 0 && ( */}
          <div className="col-3">
            <Btn
              className="removeBtn"
              type="button"
              onClick={() => removeFun(index)}
              text="Remove"
            />
          </div>
        </div>
      ))}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default InputArray;
