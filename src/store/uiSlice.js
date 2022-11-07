import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    status: "",
    title: "",
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    turnOnNotification(state, action) {
      state.notification = action.payload;
    },
    turnOffNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
