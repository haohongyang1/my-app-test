/**
 * HOC
 * 定义：是一个函数foo，参数为组件Child，返回值也为组件Foo；
 */
import React, { Component } from "react";
const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};
// 参数：
function Child(props) {
  return <div className="border">Child-{props.name}</div>;
}
// 可以链式调用，递归调用高阶组件
const Foo = foo(foo(Child));
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo name="参数" />
      </div>
    );
  }
}
