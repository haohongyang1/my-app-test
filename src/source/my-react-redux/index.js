import React, {
  useContext,
  useEffect,
  useReducer,
  useLayoutEffect,
} from "react";
import { bindActionCreators } from "./bindActionCreators";
const Context = React.createContext();

// connect -------------------------------------------------------------------
const connect = (mapStateToProps = (state) => state, mapDispatchToProps) => (
  WrappedComponent
) => (props) => {
  // 读取Provider中的store，state ，需要通过Context来读取
  const store = useContext(Context);
  const { getState, dispatch, subscribe } = store;
  const stateProps = mapStateToProps(getState());
  //   dispatch object|function的兼容处理
  let dispatchProps = { dispatch };
  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch);
  } else if (typeof mapDispatchToProps === "object") {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }

  // dispatch后 更新组件中绑定的数据
  //   这里实现了函数组件forceUpdate，可参考官网
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  //1 useEffect 有延迟，为了避免两次间隔之间store的改变，所以要使用layout
  //2 useLayoutEffect
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      //   store state发生改变的时候再去执行,forceUpdate在类组件中有直接的api，但是如果函数组件应该如何来写？
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
  });
  //   subscribe(); subscribe不能直接写，应该用副作用包起来

  //   返回，包装后，和包装前的props都需要返回，这样会挂载到组件上，，，这里的WrappedComponnet就是ReactReduxPage中@connect下面定义的ReactReduxPage类组件
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
};

// Provider -----------------------------------------------------------------------
// Provider 传递过来的store中含有state dispatch subscribe，通过connect 传递给组件，挂到props上
function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
export { connect, Provider };
