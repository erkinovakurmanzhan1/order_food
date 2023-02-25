import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
  snackbar: {
    isOpen: false,
    message: "",
    severity: "success",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showSnackBar(state, action) {
      state.snackbar.isOpen = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackBar(state) {
      state.snackbar = initialState.snackbar;
    },
    changeTheme(state, action) {
      state.themeMode = action.payload;
    },
  },
});
export const uiSLiceActions = uiSlice.actions;
