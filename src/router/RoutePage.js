import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import UserPage from "./pages/UserPage";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          {/* 路由链接 */}
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          {/* 组件匹配 */}
          <Route
            exact
            path="/"
            component={IndexPage}
            children={() => <div>children</div>}
            render={() => <div>render</div>}
          ></Route>
          <Route path="/user" component={UserPage}></Route>
        </Router>
      </div>
    );
  }
}
