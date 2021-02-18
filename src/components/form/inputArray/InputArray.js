import React from "react";
import { useFieldArray } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const InputArray = (props) => {
  const { name, errors, label, control, register } = props;
  const { fields, remove, insert, append } = useFieldArray({
    control,
    name,
  });
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      {fields.map((field, index) => (
        <div className="mb-2" key={index}>
          <input
            className="col-7 mr-2"
            type="text"
            key={field.id} // important to include key with field's id
            name={`${name}[${index}].name`}
            // control={control}
            defaultValue={field.name}
            id={field.id}
          />
          {index > 0 && (
            <button
              className="col-2 mr-2"
              type="button"
              onClick={() => remove(index)}
            >
              -
            </button>
          )}
          <button className="col-2" type="button" onClick={() => append("")}>
            +
          </button>
        </div>
      ))}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default InputArray;
