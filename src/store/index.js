/**
 * 所有数据存储在store中；Action是
 * dispatch方法：修改Reducer中的值
 * subscribe：当state发生变化的时候，通知View(即更新DOM)
 * getState：获取当前状态
 * middleware写法
 */
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";

import { logger, thunk, promise } from "../source/my-redux/middlewares";
import { createStore, applyMiddleware } from "../source/my-redux";
function counterReducer(state = 0, action) {
  console.log("state-", state);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
  }
}
const store = createStore(
  counterReducer,
  applyMiddleware(thunk, logger, promise)
);
export default store;
