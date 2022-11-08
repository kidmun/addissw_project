import { call, put } from "redux-saga/effects";
import { uiActions } from "../uiSlice";
import { userActions } from "../userSlice";
import {
  requestGetUsers,
  requestAddUser,
  requestDeleteUser,
  requestUpdateUser,
} from "./userRequest";

export function* handleGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    if (response === null) {
      return;
    }
    yield put(userActions.replaceUsers(response));
    yield put(uiActions.turnOffLoading());
  } catch (err) {
    yield put(
      uiActions.turnOnNotification({
        status: "error",
        title: "network error",
        message: "something went wrong",
      })
    );
  }
}
export function* handleAddUser(action) {
  try {
    yield call(requestAddUser.bind(this, action.payload.users));

    yield put(userActions.addUser(action.payload.user));
  } catch (err) {
    yield put(
      uiActions.turnOnNotification({
        status: "error",
        title: "network error",
        message: "something went wrong, Refresh",
      })
    );
  }
}
export function* handleDeleteUser(action) {
  try {
    yield call(requestDeleteUser.bind(this, action.payload.users));

    yield put(
      userActions.deleteUser({
        id: action.payload.id,
      })
    );
  } catch (err) {
    yield put(
      uiActions.turnOnNotification({
        status: "error",
        title: "network error",
        message: "something went wrong, Refresh",
      })
    );
  }
}
export function* handleUpdateUser(action) {
  try {
    yield call(requestUpdateUser.bind(this, action.payload.users));

    yield put(userActions.updateUser(action.payload.user));
  } catch (err) {
    yield put(
      uiActions.turnOnNotification({
        status: "error",
        title: "network error",
        message: "something went wrong, Refresh",
      })
    );
  }
}
