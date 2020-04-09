import { Create_Login_User, Update_User, Logout } from "./types";
import axios from "axios";
import history from "../history";
import { checkStatus } from "../lib";
import serverUrl from "../config";

export const Create_Login_User_Action = ({ userName, password }) => {
  return async (dispatch, getState) => {
    console.log(`${serverUrl}/authenticate`);
    await axios
      .post(`${serverUrl}/authenticate`, {
        userName,
        password,
      })
      .then((res) => {
        dispatch({
          type: Create_Login_User,
          payload: {
            ...res.data,
          },
        });
        history.push(checkStatus(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const Update_User_Action = (inputs) => {
  return async (dispatch, getState) => {
    const previousState = getState();
    await axios
      .put(`${serverUrl}/updateUser`, {
        ...previousState,
        ...inputs,
      })
      .then((res) => {
        dispatch({
          type: Update_User,
          payload: {
            ...res.data,
          },
        });
        history.push(checkStatus(res.data));
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
    history.push("/");
  };
};
