import {
  Avatar,
  Checkbox,
  Input,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Forms.module.css";
import routestyles from "styles/SignUp.module.css";
import { ITrainerData } from "../../types/types";
import ListItemText from "@mui/material/ListItemText";
export interface IProps {
  baseImage: any;
  errorField: string[];
  trainerData: ITrainerData;
  setTrainerData: (e: any) => ITrainerData | any;
  uploadImage?: (e: any) => void;
  header: string;
  className?: string;
}

const ProfileDataComponent = (props: IProps) => {
  const {
    errorField,
    trainerData,
    setTrainerData,
    uploadImage,
    header,
  } = props;
  return (
    <>
      <span>{header}</span>
      <div className={styles.mainSectorForm}>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 120, height: 120 }}
          src={props?.baseImage}
          style={{ marginBottom: "1rem", alignSelf: "center" }}
        />
        <TextField
          id="standard-basic"
          label="First Name"
          error={errorField?.join(" ").includes("name") ? true : false}
          variant="standard"
          value={trainerData.name}
          onChange={(e) => {
            setTrainerData({ ...trainerData, name: e.target.value });
          }}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          error={errorField?.join(" ").includes("surname") ? true : false}
          id="standard-basic"
          label="Last Name"
          variant="standard"
          value={trainerData.surname}
          onChange={(e) => {
            setTrainerData({ ...trainerData, surname: e.target.value });
          }}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          error={errorField?.join(" ").includes("email") ? true : false}
          id="standard-basic"
          label="email"
          variant="standard"
          style={{ marginBottom: "1rem" }}
          value={trainerData.user.email}
          onChange={(e) => {
            setTrainerData({
              ...trainerData,
              user: { ...trainerData.user, email: e.target.value },
            });
          }}
        />
        <TextField
          error={errorField?.join(" ").includes("password") ? true : false}
          id="standard-basic"
          style={{ marginBottom: "1rem" }}
          label="Password"
          variant="standard"
          value={trainerData.user.password}
          onChange={(e) => {
            setTrainerData({
              ...trainerData,
              user: { ...trainerData.user, password: e.target.value },
            });
          }}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default ProfileDataComponent;
