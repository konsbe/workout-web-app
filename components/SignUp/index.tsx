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
import CountryPicker from "../RegionPicker/countryPicker";
import styles from "styles/Home.module.css";
import routestyles from "styles/SignUp.module.css";
import { ITrainerData } from "../../types/types";
import ListItemText from "@mui/material/ListItemText";

export interface IProps {
  baseImage?: any;
  errorField: string[];
  trainerData: ITrainerData;
  setTrainerData: (e: any) => ITrainerData | any;
  uploadImage: (e: any) => void;
  header: string;
  className?: string;
}
const SignUpComponent = (props: IProps) => {
  const {
    baseImage,
    errorField,
    trainerData,
    setTrainerData,
    uploadImage,
    header,
  } = props;
  return (
    <>
      <span>{header}</span>
      {/* <div
        className={`${styles.mainSectorRowFlex} ${routestyles.fieldsContainer}`}> */}
      <div
        className={`${styles.mainSectorColumnFlex} ${routestyles.mainSectorColumns}`}>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 120, height: 120 }}
          src={baseImage}
          style={{ marginBottom: "1rem", alignSelf: "center" }}
        />

        <Input
          error={errorField.join(" ").includes("image") ? true : false}
          id="standard-basic"
          type="file"
          onChange={(e) => {
            uploadImage(e);
            setTrainerData({ ...trainerData, image: baseImage });
          }}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          id="standard-basic"
          label="First Name"
          error={errorField.join(" ").includes("name") ? true : false}
          variant="standard"
          value={trainerData.name}
          onChange={(e) => {
            setTrainerData({ ...trainerData, name: e.target.value });
          }}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          error={errorField.join(" ").includes("surname") ? true : false}
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
          error={errorField.join(" ").includes("email") ? true : false}
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

        {/* <TextField
          error={errorField.join(" ").includes("trainer_type") ? true : false}
          id="standard-basic"
          style={{ marginBottom: "1rem" }}
          label="Type"
          variant="standard"
          value={trainerData.trainer_type}
          onChange={(e) => {
            setTrainerData({
              ...trainerData,
              trainer_type: 1,
            });
          }}
        /> */}
        <Select
          multiple
          displayEmpty
          value={trainerData.trainer_type}
          onChange={(e) => {
            setTrainerData({
              ...trainerData,
              trainer_type: e.target.value,
            });
          }}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected?.join(', ')}
        >
            {["TRAINER", "GYM"].map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={trainerData.trainer_type.indexOf(name) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
        </Select>
        <TextField
          error={errorField.join(" ").includes("password") ? true : false}
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

export default SignUpComponent;
