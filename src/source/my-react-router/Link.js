import React, { Component } from "react";
import { RouterContext } from "./Context";
export default class Link extends Component {
  static contextType = RouterContext;
  render() {
    // 禁止原有a标签点击后刷新页面的行为；
    let handleClick = (event) => {
      event.preventDefault();
      //   事件做跳转，通过history，将history通过Context传递过来
      this.context.history.push(this.props.to);
    };
    //   restProps：其他值的渲染，保证示例中className传递的值生效
    const { to, children, ...restProps } = this.props;
    return (
      <div>
        <a href={to} {...restProps} onClick={handleClick}>
          {children}
        </a>
      </div>
    );
  }
}
