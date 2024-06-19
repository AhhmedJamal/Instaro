"use client";
import { FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "./signIn.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <div className={styles.signIn}>
      <h2>instaro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          type="text"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          variant="outlined"
          value={email}
          error={emailError}
          sx={{ mb: 4 }}
          style={{ height: "20px" }}
        />
        <TextField
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          variant="outlined"
          value={password}
          error={passwordError}
        />
        <Link href="/forgot">Forgot Password?</Link>
        <Button disabled={emailError && passwordError} type="submit">
          Login
        </Button>
        <div className={styles.linkSignUp}>
          Don{"'"}t have an account?<Link href="/sign">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
