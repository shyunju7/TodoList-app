import { combineReducers } from "redux";
import userReducer from "./user";
import loginReducer from "./login";
import todoReducer from "./todo";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import todoTitleReducer from "./todoTitle";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [userReducer,todoReducer],
};

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  todoReducer,
  todoTitleReducer,
});

export default persistReducer(persistConfig,rootReducer);
