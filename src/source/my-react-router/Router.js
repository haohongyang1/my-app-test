import React, { Component } from "react";
import { RouterContext } from "./Context";
export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    // 2 通过监听window.location的变化来执行更新组件的操作，我们通过history.listen来监听
    props.history.listen((location) => {
      this.setState({ location });
    });
  }
  render() {
    //   1 传递History的值，提供者
    return (
      <RouterContext.Provider
        value={{ history: this.props.history, location: this.state.location }} // 这里传递location保证子组件Route可以拿到最新的location
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
