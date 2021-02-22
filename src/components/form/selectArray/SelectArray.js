import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../error/Error";
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
  //  const { field } = useController(props);
  const { fields, remove, insert, append } = useFieldArray({
    control,
    name,
  });
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {props.astric && <span className="error">*</span>}
      {fields.map((item, index) => {
        return (
          <div className="mb-2" key={item.id}>
            <Controller
              defaultValue={options[0]?.value ? options[0].value : "Action"}
              render={({ value, onChange, onBlur }) => {
                return (
                  <select
                    className="col-9 mr-2"
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
            {index === 0 && (
              <button
                className="col-2 mr-2 actionBtn"
                type="button"
                onClick={() => append("")}
              >
                +
              </button>
            )}
            {index > 0 && (
              <button
                className="col-2 mr-2 actionBtn"
                type="button"
                onClick={() => remove(index)}
              >
                -
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
