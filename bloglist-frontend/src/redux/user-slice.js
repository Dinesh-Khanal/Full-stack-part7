import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: null,
  userlist: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogin(state, action) {
      window.localStorage.setItem("loggedUser", JSON.stringify(action.payload));
      state.userdata = action.payload;
    },
    userLogout(state) {
      state.userdata = null;
    },
    getUsers(state, action) {
      state.userlist = action.payload;
    },
  },
});
export const { userLogin, userLogout } = userSlice.actions;
export default userSlice;
