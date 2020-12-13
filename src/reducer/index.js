import { combineReducers } from "redux";
import userReducer from "./user";
import loginReducer from "./login";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  todoReducer,
});

export default rootReducer;
