"use client";
import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface CustomThemeProviderProps {
  children: ReactNode;
}
const Theme = ({ children }: CustomThemeProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Theme;
