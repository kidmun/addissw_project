import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    ui: uiSlice.reducer,
  },
});
