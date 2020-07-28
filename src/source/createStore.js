export default function (reducer) {
  let currentState = null;
  let currentListeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentState.forEach((listener) => listener());
  }
  function subscribe(listener) {
    //   订阅
    currentListeners.push(listener);
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}
