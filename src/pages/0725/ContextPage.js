import React, { Component } from "react";
import IndexPage from "../IndexPage/index";
// import UserPage from "../UserPage/index";
import { ThemeProvider } from "../../context/index";
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeProvider value={theme}>
          <IndexPage />
          <h3>ContextPage</h3>
          {/* <UserPage /> */}
        </ThemeProvider>
      </div>
    );
  }
}
