// 目的：把传递进来的creators中，每个对象，加上dispatch
export function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (let creator in creators) {
    obj[creator] = bindActionCreator(creators[creator], dispatch);
  }
  return obj;
}
function bindActionCreator(creator, dispatch) {
  return (...args) => {
    dispatch(creator(...args));
  };
}
