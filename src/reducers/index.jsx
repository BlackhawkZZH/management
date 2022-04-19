import { combineReducers } from "redux";
import { isLoggedReducer } from "./isLogged";

export const allReducers = combineReducers({
  isLogged: isLoggedReducer,
})