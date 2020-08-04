import React, { Component } from "react";
import { RouterContext } from "./Context";
export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          //  3 通过consumer的context，拿到更新后的location
          const { location } = context;
          //   1 传递必要的值过来，显示子组件
          const { children, component, render, path } = this.props;
          const match = path === window.location.pathname;
          // 2 根据匹配值渲染组件
          //   const match = path === window.location.pathname;
          return match ? React.createElement(component) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
