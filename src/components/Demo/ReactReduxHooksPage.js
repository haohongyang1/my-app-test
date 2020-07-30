import React from "react";
import { useSelector } from "react-redux";
export default function ReactReduxHooksPage(props) {
  const count = useSelector(({ count }) => count); // 获取
  return <div></div>;
}
