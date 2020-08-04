import React, { Component } from "react";
import { RouterContext } from "./Context";
export default class Router extends Component {
  // 自定义match如果不传递时候的默认值(直接在源码里拷贝过来的)
  static computedRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    // 2 通过监听window.location的变化来执行更新组件的操作，我们通过history.listen来监听，listen函数会返回一个函数是取消监听的，我们直接接收就可以了，
    this.unlisten = props.history.listen((location) => {
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    // 3 如果存在监听，在组件卸载时要取消监听
    if (this.unlisten) {
      this.unlisten();
    }
  }
  render() {
    //   1 传递History的值，提供者
    return (
      <RouterContext.Provider
        value={{
          history: this.props.history,
          location: this.state.location,
          match: Router.computedRootMatch(this.state.location.pathname), // 如果不给传match的话，要给一个默认进行赋值，
        }} // 这里传递location保证子组件Route可以拿到最新的location
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
