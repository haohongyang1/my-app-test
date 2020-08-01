/**
 * Hooks api practice
 */
import React, { useReducer } from "react";
import { counterReducer } from "../../store/counter-for-hook";
// console.log(counterReducer);
const init = (initArg) => {
  return initArg - 0;
};
export default function HooksPage() {
  // 返回的是数组，那么用户可以自定义数组中变量名（只要数组下标一一对应就可以），无需像对象解构一样把变量名全部对应上
  //   const [state, dispatch] = useReducer(counterReducer, 0);
  // useReducer使用
  const [state, dispatch] = useReducer(counterReducer, "0", init);
  console.log("state---", state);
  console.log("dispatch---", dispatch);
  return (
    <div>
      <h3>HooksPage</h3>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
    </div>
  );
}
