/**
 * Redux 是一个轻量状态管理器，可以通过middleware来扩展其功能
 */

import React, { Component } from "react";
import store from "../../store";

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log("state发生变化了");
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe({ type: "ADD" });
    }
  }
  add = () => {
    store.dispatch({ type: "ADD" });
  };
  asyAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "ADD" });
        console.log("getState", getState()); //sy-log
      }, 1000);
    });
  };
  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 100,
      })
    );
  };
  render() {
    // console.log(store.getState());
    return (
      <div>
        ReduxPage
        <p>{store.getState().counter}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    );
  }
}
