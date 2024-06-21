"use client";
import { FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "./signIn.module.scss";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);
  const [passwordCondition1, setPasswordCondition1] = useState<boolean>(false);
  const [passwordCondition2, setPasswordCondition2] = useState<boolean>(false);
  const [showConditionPassword, setShowConditionPassword] =
    useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = email !== "";
    const isPasswordValid =
      password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    if (isEmailValid && isPasswordValid) {
      console.log(email, password);
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    newPassword.length === 0 ? setPasswordError(true) : setPasswordError(false);
    setShowConditionPassword(true);

    setPasswordCondition1(newPassword.length >= 6);
    setPasswordCondition2(
      /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword)
    );
  };

  return (
    <div className={styles.signIn}>
      <h2>instaro</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
        />
        <div className={styles.divLinkAndCondition}>
          <Link href="/forgot">Forgot Password?</Link>
          {showConditionPassword && (
            <ul>
              <li className={passwordCondition1 ? styles.green : ""}>
                The Password should be 6 characters long
              </li>
              <li className={passwordCondition2 ? styles.green : ""}>
                It has a large letter and a small letter
              </li>
            </ul>
          )}
        </div>
        <Button
          disabled={emailError || passwordError}
          style={{ opacity: emailError || passwordError ? 0.5 : 1 }}
          type="submit"
        >
          Log in
        </Button>

        <div className={styles.or}>
          <span></span>
          <div>Or</div>
          <span></span>
        </div>
        <div className={styles.linkSignUp}>
          Don{"'"}t have an account?<Link href="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
