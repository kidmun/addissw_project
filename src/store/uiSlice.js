import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    status: "",
    title: "",
    message: "",
  },
  loading: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    turnOnNotification(state, action) {
      state.notification = action.payload;
    },
    turnOffNotification(state, action) {
      state.notification = {
        status: "",
        title: "",
        message: "",
      };
    },
    turnOnLoading(state) {
      state.loading = true;
    },
    turnOffLoading(state) {
      state.loading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
