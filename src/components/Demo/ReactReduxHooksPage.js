import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function ReactReduxHooksPage(props) {
  const counter = useSelector(({ counter }) => counter); // 获取
  const dispatch = useDispatch();
  //   使用useCallback把方法缓存起来，为什么要缓存起来

  const add = useCallback(() => {
    console.log("ADD---");
    dispatch({ type: "ADD" });
  });
  const minus = () => {
    console.log("MINUS");
    dispatch({ type: "MINUS" });
  };
  let test = 10;
  test = 20;
  return (
    <div>
      <h3>ReactReactHooksPage</h3>
      <p>test{test}</p>
      <p>{counter}</p>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
    </div>
  );
}
