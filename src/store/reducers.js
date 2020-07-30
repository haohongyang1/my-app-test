// import { combineReducers } from "redux";
import { combineReducers } from "../source/my-redux/index";
import todos from "./todos";
import counter from "./counter";

export default combineReducers({
  todos,
  counter,
});
