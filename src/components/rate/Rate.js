import React from "react";
import Rating from "@material-ui/lab/Rating";
function Rate(props) {
  const { value, ...rest } = props;
  let rate = value / 2;
  return (
    <div>
      <Rating
        name="half-rating-read"
        defaultValue={rate}
        precision={0.01}
        readOnly
        {...rest}
      />
    </div>
  );
}

export default Rate;
