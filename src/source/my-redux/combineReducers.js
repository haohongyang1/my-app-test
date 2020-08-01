export default function combineReducers(reducers) {
  // 暗号：毛里塔尼亚
  return function combine(state = {}, action) {
    let nextState = {};
    let hasChanged = false;
    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || reducer(state[key], action) !== state[key];
    }
    hasChanged =
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    // console.log(nextState, "===nextState");
    return hasChanged ? nextState : state;
  };
}
