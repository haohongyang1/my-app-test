import React, { Component } from "react";
import { RouterContext } from "./Context";
import matchPath from "./matchPath";
export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          //  3 通过consumer的context，拿到更新后的location
          const { location } = context;
          //   1 传递必要的值过来，显示子组件
          const { children, component, render, path } = this.props;
          // 4 path的值可能是对象或者是字符串，需要进行处理，这里写一个函数来比对
          const match = matchPath(location.pathname, this.props);
          console.log(match, "====match");
          this.props = { ...context, match };
          // 2 根据匹配值渲染组件(见3中优化方案)
          //   const match = path === window.location.pathname;
          return match ? React.createElement(component) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
