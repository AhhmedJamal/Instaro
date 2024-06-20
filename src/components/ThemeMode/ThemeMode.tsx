"use client";
import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ThemeProps {
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Theme;
