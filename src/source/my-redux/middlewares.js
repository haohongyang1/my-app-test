import isPromise from "is-promise";
export function logger({ getState }) {
  // next 每次聚合生成新的函数
  return (next) => (action) => {
    console.log("*********************");
    let prevSate = getState();

    console.log("prev state=", prevSate);
    console.log(action.type, "执行了");
    const returnValue = next(action);
    let nextState = getState();
    console.log("next state=", nextState);

    console.log("*********************");
    return returnValue;
  };
}
export function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
export function promise({ dispatch }) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}
