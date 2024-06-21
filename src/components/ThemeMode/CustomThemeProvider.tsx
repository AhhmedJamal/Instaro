"use client";
import { Provider, useSelector } from "react-redux";
import { RootState, store, useAppDispatch } from "@/store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, useEffect } from "react";
import { darkMode, lightMode } from "@/store/theme/themeSlice";

const lightTheme = createTheme({
  palette: {
    // primary: {
    //   main: "#4423d5", // Replace this with your desired primary color
    // },
    mode: "light",
    background: {
      default: "#f1f1f1",
    },
    text: {
      primary: "#000000",
    },
  },
});
const darkTheme = createTheme({
  palette: {
    // primary: {
    //   main: "#4423d5", // Replace this with your desired primary color
    // },
    mode: "dark",

    background: {
      default: "#121212",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const { dark } = useSelector((state: RootState) => state.dark);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const modeInLocalStorage = localStorage.getItem("darkMode");
    if (modeInLocalStorage !== undefined) {
      dispatch(modeInLocalStorage === "true" ? darkMode() : lightMode());
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={!dark ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
