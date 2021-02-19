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
              // defaultValue={options[0] ? options[0].value : ""}

              // defaultValue={index === 0 ? "choose" : ""}
              render={({ value, onChange, onBlur }) => {
                return (
                  <select
                    className="col-7 mr-2"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  >
                    {options.map((option, index) =>
                      index == 0 ? (
                        <option hidden disabled>
                          Choose
                        </option>
                      ) : (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      )
                    )}
                  </select>
                );
              }}
              name={`${name}[${index}].name`}
              control={control}
            />
            {index === 0 && (
              <button
                className="col-2 mr-2"
                type="button"
                onClick={() => append("")}
              >
                +
              </button>
            )}
            {index > 0 && (
              <button
                className="col-2 mr-2"
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
