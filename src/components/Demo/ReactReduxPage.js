/**
 * React-Redux
 * 目的：让Redux更适合React，让数据 1层层传递不用每次赋值、2不用每次都store.去调用api；
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// 装饰器写法
@connect(
  // 1-----mapStateToProps 把state映射到props上
  ({ count }) => ({ count }),
  //   2------mapDispatchToProps 把dispatch映射到props
  // {
  //   add: () => ({ type: "ADD" }),
  // }
  // 第二个参数如果是Object，那么dispatch-api就不能用了，所以我们可以换成function，自定义一个dispatch方法
  (dispatch) => {
    // 如果每次使用一个方法，都要自定义，会很麻烦，所以可以通过bindActionCreators统一处理
    // const add = () => dispatch({ type: "ADD" });
    // const minus = () => dispatch({ type: "MINUS" });
    let creators = {
      add: () => ({ type: "ADD" }),
      minus: () => ({ type: "MINUS" }),
    };
    creators = bindActionCreators(creators, dispatch); // bindActionCreators把dispatch 放到creators
    return { dispatch, ...creators };
  },
  // 3-----mergeStateToProps
  (stateProps, dispatchProps, ownProps) => {
    return { ...stateProps, ...dispatchProps, ...ownProps };
  }
)
class ReactReduxPage extends Component {
  render() {
    const { num, add } = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={add}>add</button>
      </div>
    );
  }
}

export default ReactReduxPage;

// 实际含义
// export default connect(
//   // mapStateToProps 把state映射到props上
//   (state) => ({ num: state }),
//   //   mapDispatchToProps 把dispatch映射到props
//   {
//     add: () => ({ type: "ADD" }),
//   }
// )(
//   class ReactReduxPage extends Component {
//     render() {
//       const { num, add } = this.props;
//       return (
//         <div>
//           <h3>ReactReduxPage</h3>
//           <p>{num}</p>
//           <button onClick={add}>add</button>
//         </div>
//       );
//     }
//   }
// );
