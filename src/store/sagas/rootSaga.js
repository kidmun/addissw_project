import { takeLatest } from "redux-saga/effects";
import {
  handleGetUsers,
  handleAddUser,
  handleDeleteUser,
  handleUpdateUser,
} from "./userHandlers";
import { userActions } from "../userSlice";

export function* watcherSaga() {
  yield takeLatest(userActions.getUsers.type, handleGetUsers);
  yield takeLatest(userActions.addUserRequest.type, handleAddUser);
  yield takeLatest(userActions.deleteUserRequest.type, handleDeleteUser);
  yield takeLatest(userActions.updateUserRequest.type, handleUpdateUser);
}
