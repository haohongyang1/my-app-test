/**
 * Hooks api practice
 */
import React, { useReducer } from "react";
import counter from "../../store/counter";

export default function HooksPage() {
  // 返回的是数组，那么用户可以自定义数组中变量名（只要数组下标一一对应就可以），无需像对象解构一样把变量名全部对应上
  const a = useReducer(counter); // ???
  console.log(a);
  return (
    <div>
      <h3>HooksPage</h3>
    </div>
  );
}
