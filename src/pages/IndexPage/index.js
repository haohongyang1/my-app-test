import React, { Component } from "react";
import Layout from "../../fragments/Layout";
import { ThemeContext } from "../../context";
export default class IndexPage extends Component {
  // 将context属性挂到this下
  static contextType = ThemeContext;
  render() {
    console.log("this", this);
    const { themeColor } = this.context;
    return (
      <div>
        <Layout showTopBar={true} barTitle={"首页"}>
          {/* <h3>IndexPage</h3> */}
          {{
            content: <h3 style={{ color: themeColor }}>IndexPage</h3>,
            text: "模拟插槽--传递文本测试",
            btnClick: () => {
              console.log("模拟插槽---点击事件测试");
            },
          }}
        </Layout>
      </div>
    );
  }
}
