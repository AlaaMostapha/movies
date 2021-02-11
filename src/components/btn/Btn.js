import React from "react";
import Button from "@material-ui/core/Button";

export default function Btn(props) {
  const { color, text, href, onClick, ...rest } = props;
  return (
    <Button
      variant="contained"
      color={color}
      href={href}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
}
