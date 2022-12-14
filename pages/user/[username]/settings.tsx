import { Button } from "@mui/material";
import Head from "next/head";
import React, { useReducer, useState } from "react";
import { createTrainer } from "../../../api/trainer.api";
import IbanValidation from "../../../controllers/helpers/ibanValidation";
import userReducer from "../../../controllers/reducers/user.reducer";
import styles from "../../../styles/Home.module.css";
import styling from "../../../styles/SignUp.module.css";
import {
  INITIAL_TRAINER_DATA,
  ITrainerData,
  TypeErrorItem,
} from "../../../types/types";
import SettingsFormComponent from "../../../components/Forms/SettingsForm";
import Sidebar from "../../../components/SideBar/sidebar";

type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

const Settings = () => {
  const [baseImage, setBaseImage] = useState("");
  const [muiId, setMuiId] = useState();
  const [errorField, setErrorField] = useState<any[]>([]);
  const [trainerData, setTrainerData] =
    useState<ITrainerData>(INITIAL_TRAINER_DATA);
  const [INITIAL_STATE, dispatch] = useReducer(userReducer, trainerData);
  var template = new IbanValidation("GB82WEST12345698765432");
  template.check_iban();
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = e.target.files[0];
    const base64: Base64<"png" | "jpg" | "jpeg"> | any = await convertBase64(
      file
    );
    setBaseImage(base64);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const submitButton = async () => {
    const response = await fetch("http://localhost:24550/write_trainer", {
      method: "POST",
      body: JSON.stringify({ ...trainerData }),
      headers: {
        "Content-Type": "application/json",
        // accept: "application/json",
      },
    });
    const data = await response.json();
    if (response.status > 399) {
      let arr: any[] = [];
      data.detail.map((item: TypeErrorItem) => arr.push(...item.loc));
      console.log(data);
      setErrorField([...arr]);
    } else {
      console.log(data);
      // dispatch({ type: "AUTH", data: trainerData, route:"write_trainer" });
    }
  };

  return (
    <>
      <main className={styles.main}>
        <SettingsFormComponent
          baseImage={baseImage}
          errorField={errorField}
          trainerData={trainerData}
          setTrainerData={setTrainerData}
          uploadImage={uploadImage}
          header={"Update Profile"}
        />
        <Button className={styling.signUpButton} onClick={submitButton}>
          Submit
        </Button>
      </main>
    </>
  );
};

export default Settings;
