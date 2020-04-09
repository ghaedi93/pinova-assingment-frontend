import { Create_Login_User, Update_User, Logout } from "../actions/types";

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
      return {
        ...state,
        ...action.payload,
      };
    case Update_User:
      return {
        ...state,
        ...action.payload,
      };
    case Logout:
      return {};
    default:
      return state;
  }
}
