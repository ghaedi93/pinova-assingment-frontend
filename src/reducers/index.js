import {
  Create_Login_User,
  Update_Info_User,
  Update_Terms_User,
  Update_Welcome_User,
} from "../actions/types";

const initialState = {
  _id: "",
  userName: "",
  password: "",
  showEmailPhoneScreen: "",
  showTermsAndCondition: "",
  showWelcomeScreen: "",
  acceptMarketing: "",
  email: "",
  phone: "",
};

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case Create_Login_User:
      console.log("inside reducer", {
        ...state,
        ...action.payload,
      });
      return {
        ...state,
        ...action.payload,
      };
    case Update_Info_User:
      return {
        ...state,
        ...action.payload,
      };
    case Update_Terms_User:
      return {
        ...state,
        ...action.payload,
      };
    case Update_Welcome_User:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
