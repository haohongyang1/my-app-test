// 0725
export default function createStore(reducer, enhancer) {
  // enhancer 就是你createStore的第二个参数，applayMiddleWare的返回值是createStore，执行后再更新一下createStore的能力
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState;
  let currentListeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    // 收集dispatch
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  }
  function subscribe(listener) {
    //   订阅
    currentListeners.push(listener);
    return (action) => {
      // 过滤
      // this.currentListeners = this.currentListeners.filter((item) => {});
      this.currentListeners = [];
    };
  }
  dispatch({ type: "init-md5-123232" });
  return {
    getState,
    dispatch,
    subscribe,
  };
}
