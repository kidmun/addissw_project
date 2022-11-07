import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
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
      if (userIndex > 0) {
        throw new Error("user not found");
      } else {
        state.users[userIndex] = updatedUser;
      }
    },
    deleteUser(state, action) {
      const userId = action.payload.id;
      const user = state.users.find((user) => user.id === userId);
      if (!user) {
        throw new Error("user not found");
      } else {
        state.users.filter((user) => user.id !== userId);
      }
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
