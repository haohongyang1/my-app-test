import React, { Component } from "react";
import store from "../../store/index.js";
export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("state发生变化了");
      this.forceUpdate();
    });
  }
  render() {
    console.log(store);
    return (
      <div>
        ReduxPage
        <p>store.state</p>
        <button
          onClick={() => {
            store.dispatch({ type: "ADD" });
          }}
        >
          add
        </button>
      </div>
    );
  }
}
