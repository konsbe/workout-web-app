import { Avatar, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import CountryPicker from "../RegionPicker/countryPicker";
import styles from "styles/Home.module.css";
import routestyles from "styles/SignUp.module.css";
import { ITrainerData } from "../../types/types";

export interface IProps {
    baseImage:any;
    errorField:string[];
    trainerData:ITrainerData;
    setTrainerData:(e:any) => ITrainerData;
    uploadImage:(e:any) => void
}
const SignUpComponent = (props:IProps) => {
  const { baseImage, errorField, trainerData, setTrainerData, uploadImage } =
    props;
  return (
    <>
      <div className={styles.fontBack}>Back</div>
      <span>Signup</span>
      <div
        className={`${styles.mainSectorRowFlex} ${routestyles.fieldsContainer}`}>
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
            value={baseImage}
            onChange={(e) => {
              uploadImage(e);
              // setTrainerData({ ...trainerData, image: e.target.value });
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
            error={errorField.join(" ").includes("username") ? true : false}
            id="standard-basic"
            label="Nick Name"
            variant="standard"
            style={{ marginBottom: "1rem" }}
            value={trainerData.user.username}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                user: { ...trainerData.user, username: e.target.value },
              });
            }}
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
        </div>
        <div
          className={`${styles.mainSectorColumnFlex} ${routestyles.mainSectorColumns}`}>
          <TextField
            error={errorField.join(" ").includes("phone_number") ? true : false}
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            style={{ marginBottom: "1rem" }}
            value={trainerData.phone_number}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                phone_number: e.target.value,
              });
            }}
          />
          <TextField
            error={errorField.join(" ").includes("sex") ? true : false}
            id="standard-basic"
            style={{ marginBottom: "1rem" }}
            label="Sex"
            variant="standard"
            value={trainerData.sex}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                sex: e.target.value,
              });
            }}
          />
          <TextField
            error={errorField.join(" ").includes("age") ? true : false}
            id="standard-basic"
            style={{ marginBottom: "1rem" }}
            label="Age"
            variant="standard"
            value={trainerData.age}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                age: parseInt(e.target.value),
              });
            }}
          />
          <CountryPicker
            trainerData={trainerData}
            setTrainerData={setTrainerData}
          />
          <TextField
            error={errorField.join(" ").includes("bank_account") ? true : false}
            id="standard-basic"
            label="Bank Acount"
            variant="standard"
            style={{ marginBottom: "1rem" }}
            value={trainerData.user.bank_account}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                user: {
                  ...trainerData.user,
                  bank_account: parseInt(e.target.value),
                },
              });
            }}
          />
          <TextField
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
          />
          <TextField
            error={errorField.join(" ").includes("description") ? true : false}
            id="standard-basic"
            style={{ marginBottom: "1rem" }}
            label="Description"
            variant="standard"
            value={trainerData.description}
            onChange={(e) => {
              setTrainerData({
                ...trainerData,
                description: e.target.value,
              });
            }}
          />
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
      </div>
    </>
  );
};

export default SignUpComponent;
