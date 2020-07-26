import React from "react";
import ReactDOM from "react-dom"; // 负责渲染dom ，VDOM -> DOM
import "./index.css";
import App from "./App";
import "./static/iconfont/iconfont.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
