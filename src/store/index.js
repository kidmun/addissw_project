import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";
import userSlice from "./userSlice";
import uiSlice from "./uiSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);
