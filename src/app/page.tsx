"use client";
import NavBar from "@/components/NavBar/NavBar";
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { darkMode, lightMode } from "../store/theme/themeSlice";
import { useAppDispatch } from "@/store/store";

const Home: React.FC = () => {
  const [mode, setMode] = useState<boolean | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setMode(storedMode === "true");
    } else {
      setMode(false); 
    }
  }, []);

  const handleClick = () => {
    if (mode !== null) {
      const newMode = !mode;
      setMode(newMode);
      localStorage.setItem("darkMode", newMode.toString());
      newMode ? dispatch(darkMode()) : dispatch(lightMode());
    }
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
};

export default Home;
