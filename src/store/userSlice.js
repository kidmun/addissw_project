import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers() {},
    addUserRequest() {},
    deleteUserRequest() {},
    updateUserRequest() {},
    replaceUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUser(state, action) {
      const updatedUser = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.id === updatedUser.id
      );
      if (userIndex < 0) {
        throw new Error("user not found");
      } else {
        state.users[userIndex] = updatedUser;
      }
    },
    deleteUser(state, action) {
      const userId = action.payload.id;
      console.log(userId);

      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
