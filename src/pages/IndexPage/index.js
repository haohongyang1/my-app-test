import React, { Component } from "react";
import Layout from "../../fragments/Layout";
export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={true} barTitle={"首页"}>
          {/* <h3>IndexPage</h3> */}
          {{
            content: <h3>IndexPage</h3>,
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
