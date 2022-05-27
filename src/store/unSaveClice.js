import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: undefined,
  isWarn: false,
};

// Cấu hình slice
export const unSaveSlice = createSlice({
  name: "unsaveForm",
  initialState,
  reducers: {
    updateUnSaveForm: (state, value) => {
      state.value = value.payload;
    },
    turnOnWarn: (state) => {
      state.isWarn = !!state.value;
    },
    turnOffWarn: (state) => {
      state.isWarn = false;
      state.value = undefined;
    },
  },
});


export const { updateUnSaveForm, turnOnWarn, turnOffWarn } =
  unSaveSlice.actions;

export const getUnSaveForm = (state) => state.value;
export const getStatus = (state) => state.isWarn;


export default unSaveSlice.reducer;
