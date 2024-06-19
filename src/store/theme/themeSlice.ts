// slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: true,
};

export const themeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.dark = true;
      localStorage.setItem("darkMode", "false");
    },
    lightMode: (state) => {
      state.dark = false;
      localStorage.setItem("darkMode", "true");
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;
export default themeSlice.reducer;
