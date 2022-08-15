import login from "../services/login";
import userSlice from "./user-slice";
import getAllUsers from "../services/users";

const userActions = userSlice.actions;

export const loginUser = (username, password) => {
  return async (dispatch) => {
    const response = await login(username, password);
    dispatch(userActions.userLogin(response));
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const response = await getAllUsers();
    dispatch(userActions.getUsers(response));
  };
};
