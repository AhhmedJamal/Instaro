"use client";
import { FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "./signIn.module.scss";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordCondition1, setPasswordCondition1] = useState<boolean>(false);
  const [passwordCondition2, setPasswordCondition2] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      email !== "" &&
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password)
    ) {
      console.log(email, password);
    }
  };

  const handleChange = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (password !== "") {
      setPasswordError(true);
    }

    if (password.length >= 6) {
      setPasswordCondition1(true);
    } else {
      setPasswordCondition1(false);
    }
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
      setPasswordCondition2(true);
    } else {
      setPasswordCondition2(false);
    }
  };
  return (
    <div className={styles.signIn}>
      <h2>instaro</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        onChange={handleChange}
      >
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
          // error={passwordError}
        />
        <div className={styles.divLinkAndCondition}>
          <Link href="/forgot">Forgot Password?</Link>
          <ul>
            <li className={passwordCondition1 ? styles.green : styles.red}>
              {" "}
              The Password should be 6 characters long
            </li>
            <li className={passwordCondition2 ? styles.green : styles.red}>
              {" "}
              It has a large letter and a small letter
            </li>
          </ul>
        </div>
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
