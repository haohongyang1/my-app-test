import React from "react";
import ReactDOM from "react-dom"; // 负责渲染dom ，VDOM -> DOM
import "./index.css";
import App from "./App";
import "./static/iconfont/iconfont.css";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  // React严格模式，会导致执行两次render，具体见官网
  // <React.StrictMode>
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
