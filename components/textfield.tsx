import { TextField } from "@mui/material";
import React from "react";

const MyTextFieled = ({
  id,
  style,
  label,
  variant,
}: {
  id: string;
  style: string | any;
  label: string;
  variant: string | any;
}): JSX.Element => {
  return <TextField id={id} style={style} label={label} variant={variant} />;
};
export default MyTextFieled;
