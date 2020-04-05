import {
  Create_Login_User,
  //   Update_Info_User,
  //   Update_Terms_User,
  //   Update_Welcome_User,
} from "./types";
import axios from "axios";

export const Create_Login_User_Action = ({ userName, password }) => {
  return (dispatch, getState) => {
    console.log(getState());
    axios
      .post(`http://localhost:3000`, {
        userName,
        password,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: Create_Login_User,
          payload: {
            ...res,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
