/**
 * 所有数据存储在store中；Action是
 * dispatch方法：修改Reducer中的值
 * subscribe：当state发生变化的时候，通知View(即更新DOM)
 * getState：获取当前状态
 */
import { createStore } from "redux";
function counterReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "MINUS":
      return (state -= 1);
  }
}
const store = createStore(counterReducer);
export default store;
