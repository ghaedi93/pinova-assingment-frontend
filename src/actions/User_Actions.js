import {
  Create_Login_User,
  //   Update_Info_User,
  //   Update_Terms_User,
  //   Update_Welcome_User,
} from "./types";
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
