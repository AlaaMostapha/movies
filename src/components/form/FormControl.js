import React from "react";
import Input from "./input/Input";
import Textarea from "./textarea/Textarea";
import Select from "./select/Select";
import Date from "./date/Date";
import InputArray from "./inputArray/InputArray";
import SelectArray from "./selectArray/SelectArray";
function FormControl(props) {
  const { kind, ...rest } = props;
  switch (kind) {
    case "input":
      return <Input {...rest} />;
    case "inputArray":
      return <InputArray {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    // case "select":
    //   return <Select {...rest} />;
    case "SelectArray":
      return <SelectArray {...rest} />;
    case "date":
      return <Date {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
