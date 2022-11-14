import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";

const Settings = () => {
  return (
    <>
      <span>Settings</span>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          // value={values.amount}
          // onChange={handleChange("amount")}
          startAdornment={
            <InputAdornment position="start">Fuck:</InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default Settings;
