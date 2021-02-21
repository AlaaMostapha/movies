import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const InputArray = (props) => {
  const { name, errors, label, control, register, setValue } = props;
  const { fields, remove, append } = useFieldArray({
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
          <Controller
            render={({ value, onChange }) => {
              return (
                <input
                  type="text"
                  className="col-7 mr-2"
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              );
            }}
            key={field.id} // important to include key with field's id
            id={field.id}
            name={`${name}[${index}].name`}
            control={control}
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
          {index === 0 && (
            <button className="col-2" type="button" onClick={() => append("")}>
              +
            </button>
          )}
        </div>
      ))}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default InputArray;
