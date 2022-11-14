import { createTrainer } from "../../api/trainer.api";
import { INITIAL_TRAINER_DATA } from "../../types/types";
import { UAction } from "./user.types";

const userReducer = (
  state = INITIAL_TRAINER_DATA,
  action: UAction | any,
  route = ""
) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "GOOGLE_AUTH":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "AUTH":
    //   createTrainer(action?.data,route);
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "SET_USER":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOG_OUT_USER":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default userReducer;
