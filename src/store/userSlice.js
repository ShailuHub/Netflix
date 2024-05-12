import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, isSignIn: false },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    toggleIsSignIn: (state) => {
      state.isSignIn = !state.isSignIn;
    },
  },
});

export const { addUser, removeUser, updateUser, toggleIsSignIn } =
  userSlice.actions;
export default userSlice;
