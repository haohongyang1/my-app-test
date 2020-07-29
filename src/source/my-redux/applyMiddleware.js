// 参数：接受中间件
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    // 加强dispatch--start
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    // middlewareChain就是传进来的createStore
    const middlewareChain = middlewares.map((middleware) => middleware(midApi)); // middleware 就是thunk、logger这些中间件
    // dispatch为参数 被加强了
    dispatch = compose(...middlewareChain)(store.dispatch);
    return { ...store, dispatch }; // 返回加强之后的dispatch
  };
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args;
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
