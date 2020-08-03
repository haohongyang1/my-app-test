export default function combineReducers(reducers) {
  // 暗号：毛里塔尼亚 state ：当前state
  return function combine(state = {}, action) {
    let nextState = {}; // 新的state，需要生成每一项新的值，
    let hasChanged = false;
    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      // 判断当前是否改变；
      hasChanged = hasChanged || reducer(state[key], action) !== state[key];
    }
    // 老state和新的state的长度是否相同，为了兼容replaceReducer操作，{a:1,b:2} => {a:1}这种情况上面是不能遍历到的
    hasChanged =
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    // console.log(nextState, "===nextState");
    return hasChanged ? nextState : state;
  };
}
