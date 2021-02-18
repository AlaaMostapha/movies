import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
const SelectArray = (props) => {
  const { name, type, errors, label, options, control, ...rest } = props;
  //  const { field } = useController(props);
  const { fields, remove, insert, append } = useFieldArray({
    control,
    name,
  });
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {fields.map((item, index) => {
        return (
          <div className="mb-2" key={item.id}>
            <Controller
              defaultValue={options[0] ? options[0].value : ""}
              render={({ value, onChange, onBlur }) => {
                return (
                  <select
                    className="col-7 mr-2"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  >
                    {options.map((option) => (
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
            <button
              className="col-2 mr-2"
              type="button"
              onClick={() => append("")}
            >
              +
            </button>
            <button
              className="col-2 mr-2"
              type="button"
              onClick={() => remove(index)}
            >
              -
            </button>
          </div>
        );
      })}
      {/* {fields.map((field, index) => (
        <div key={index}>
          <select
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            name={`${name}[${index}].name`}
            // {...rest}
            id={field.id}
            key={field.id}
          >
            {options.map((option) => {
              return (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              );
            })}
          </select>
          {index > 0 && (
            <button type="button" onClick={() => remove(index)}>
              -
            </button>
          )}
          <button type="button" onClick={() => append("")}>
            +
          </button>
        </div>
      ))} */}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
};

export default SelectArray;
