import { Button } from "@mui/material";
import Head from "next/head";
import React, { useReducer, useState } from "react";
import { createTrainer } from "../api/trainer.api";
import SignUpComponent from "../components/SignUp";
import styles from "../styles/Home.module.css";
import styling from "../styles/SignUp.module.css";
import { useRouter } from "next/navigation";
import LoginFormComponent from "../components/Forms/LogInForm";

type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

const Signup = () => {
  const router = useRouter();

  const [errorField, setErrorField] = useState<any[]>([]);
  const [loginData, setLoginData] = useState<any>({ email: "", passsword: "" });
  const submitButton = async () => {
    router.push("/user/123/profile");
  };

  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.fontBack}>Back</div>
        <LoginFormComponent
          errorField={errorField}
          loginData={loginData}
          setLoginData={setLoginData}
          header={"Login Up"}
        />
        <Button className={styling.signUpButton} onClick={submitButton}>
          Log in..
        </Button>
      </main>
    </>
  );
};

export default Signup;
