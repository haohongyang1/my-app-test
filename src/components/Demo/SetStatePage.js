// A demo for practice using setState
import React, { Component } from "react";
/**
 * 总结：setState有时是异步的；
 * 同步的情况有：setState第二个参数、setTimeout、DOM中获取的
 */
export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    // this.changeValue(1);
    document.getElementById("test").addEventListener("click", this.setCounter);
  }
  changeValue = (val) => {
    // setState 是异步的
    // this.setState(
    //   {
    //     counter: this.state.counter + val,
    //   },
    //   // 在第二个参数中可以拿到同步的值
    //   function (val) {
    //     console.log("第二个参数中拿到的", this.state.counter);
    //   }
    // );
    this.setState((state) => {
      return {
        counter: state.counter + val,
      };
    });
    console.log("立即读取拿到的", this.state.counter);
  };
  setCounter = () => {
    // setTimeout(() => {
    //   this.changeValue(1);
    //   console.log("setTimeout中拿到的", this.state.counter);
    // }, 0);
    // 同批量操作：会覆盖之前的，即只+3；如何都修改呢？
    this.changeValue(1);
    this.changeValue(2);
    this.changeValue(3);
  };
  render() {
    return (
      <div>
        <h3>TEST</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="test">原生事件{this.state.counter}</button>
      </div>
    );
  }
}
