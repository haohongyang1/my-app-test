import React, { Component } from "react";
/**
 * 生命周期
 * 16.3之前生命周期：constructor、componentWillMount、render、componentDidMount、shouldComponentUpdate、componentWillUpdate、componentDidUpdate、
 * 请注意：shouldComponentUpdate : 是否重新渲染
 * 16.4之后生命周期：
 */
export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "omg",
  };
  static propTypes = {
    //   msg:
  };
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("---constructor---");
  }
  //   16.4 add
  static getDerivedStateFromProps(props, state) {
    console.log("---getDerivedStateFromProps---");
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }
  //   16.4 add
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("---getSnapshotBeforeUpdate---", prevProps, prevState);
    return {
      msg: "我是update传递的",
    };
  }
  componentWillMount() {
    console.log("---componentWillMount---");
  }
  componentDidMount() {
    console.log("---componentDidMount---");
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;

    console.log("shouldComponentUpdate", nextProps);
    return count !== 3;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("---render---", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>增加count</button>
        {count % 2 && <Child count={count} />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillReceiveProps() {
    //   初次渲染时不执行，只有在已挂载组件接受新props时再执行；
    console.log("---componentWillReceiveProps---");
  }
  componentWillUnmount() {
    //   组件卸载时执行
    console.log("---组件卸载---componentWillUnmount---");
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
