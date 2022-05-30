import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: JSON.parse(localStorage.getItem("isDark")),
};

// Cấu hình slice
export const unSaveSlice = createSlice({
  name: "themeModeSlice",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("isDark", state.isDark);
    },
    turnDark: (state) => {
      state.isDark = true;
    },
    turnLight: (state) => {
      state.isDark = false;
    },
  },
});

export const { changeMode, turnDark, turnLight } = unSaveSlice.actions;

export const getDark = (state) => state.isDark;

export default unSaveSlice.reducer;
