import { Avatar, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import CountryPicker from "../RegionPicker/countryPicker";
import styles from "styles/Home.module.css";
import routestyles from "styles/SignUp.module.css";
import { ITrainerData } from "../../types/types";

export interface IProps {
  errorField: string[];
  loginData: { email: string; password: string };
  setLoginData: (e: any) => ITrainerData | any;
  header: string;
  className?: string;
}
const LoginFormComponent = (props: IProps) => {
  const { errorField, loginData, setLoginData, header } = props;
  return (
    <>
      <span>{header}</span>
        <div
          className={`${styles.mainSectorColumnFlex} ${routestyles.mainSectorColumns}`}>
          <TextField
            error={errorField.join(" ").includes("email") ? true : false}
            id="standard-basic"
            label="email"
            variant="standard"
            style={{ marginBottom: "1rem" }}
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
            }}
          />
          <TextField
            error={errorField.join(" ").includes("password") ? true : false}
            id="standard-basic"
            style={{ marginBottom: "1rem" }}
            label="Password"
            variant="standard"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
            }}
          />
        </div>
    </>
  );
};

export default LoginFormComponent;
