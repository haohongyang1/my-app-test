import React, { Component } from "react";
import { createBrowserHistory } from "history";
import Router from "./Router";
export default class BrowserRouter extends Component {
  // 在组件渲染之前就拿到这个history，所以要在constructor中拿
  constructor(props) {
    super(props);
    // location、切换路由等，需要使用到history
    this.history = createBrowserHistory();
  }
  render() {
    return (
      <Router history={this.history} children={this.props.children}></Router>
    );
  }
}
