/**
 * 组件复合：
 * demo模板页面，场景：存在多个页面都有顶部栏和底部栏的情况，如果每个页面都引入，会很麻烦，所以我们可以创建一个模板页面：
 * 参数：title、showTopBar、showBottomBar
 *
 * 插槽：
 * 具名插槽
 * 匿名插槽
 */
import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import BottomNav from "../../components/BottomNav";
export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
  }
  render() {
    const { children, showTopBar, showBottomBar, barTitle } = this.props;
    console.log(children);
    return (
      <div>
        {showTopBar && <TopBar title={barTitle} />}
        {children.content}
        {children.text}
        <button onClick={children.btnClick}>模拟插槽--点击测试</button>
        {showBottomBar && <BottomNav />}
      </div>
    );
  }
}
