"use client";
import NavBar from "@/components/NavBar/NavBar";
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { darkMode, lightMode } from "../store/theme/themeSlice";
import { useAppDispatch } from "@/store/store";
export default function Home() {
  const [mode, setMode] = useState();
  // localStorage.getItem("darkMode") === "true" ? true : false
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  const handleClick = () => {
    setMode(!mode);
    mode ? dispatch(darkMode()) : dispatch(lightMode());
  };
  return (
    <Container maxWidth="sm">
      <main>
        <NavBar />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Example Button
        </Button>
      </main>
    </Container>
  );
}
