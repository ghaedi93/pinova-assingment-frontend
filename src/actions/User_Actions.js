import { Create_Login_User, Update_User, Logout } from "./types";
import axios from "axios";

export const Create_Login_User_Action = ({ userName, password }) => {
  return async (dispatch, getState) => {
    console.log("current state is", getState());
    await axios
      .post(`http://localhost:3000/authenticate`, {
        userName,
        password,
      })
      .then((res) => {
        console.log("retrieved data-actionCreator", res.data);
        dispatch({
          type: Create_Login_User,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const Update_User_Action = (inputs) => {
  return async (dispatch, getState) => {
    const previousState = getState();
    console.log("Previous state", { ...previousState });
    console.log("inputs", { ...inputs });
    await axios
      .put(`http://localhost:3000/user`, {
        ...previousState,
        ...inputs,
      })
      .then((res) => {
        console.log("retrieved data-actionCreator", res.data);
        dispatch({
          type: Update_User,
          payload: {
            ...res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const Logout_Action = () => {
  return (dispatch) => {
    dispatch({
      type: Logout,
    });
  };
};
