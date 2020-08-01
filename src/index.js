import React from "react";
import ReactDOM from "react-dom"; // 负责渲染dom ，VDOM -> DOM
import "./index.css";
import App from "./App";
import "./static/iconfont/iconfont.css";
import { Provider } from "./source/my-react-redux/index"; // 自己实现Provider
// import { Provider } from "react-redux";
// import store from "./store";
import store from "./store/counter-for-hook";
ReactDOM.render(
  // React严格模式，会导致执行两次render，具体见官网
  // <React.StrictMode>
  // 通过props值的传递，把store传递下去
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
