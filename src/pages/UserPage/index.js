import React, { useContext } from "react";

import { ThemeContext } from "../../context/index";
export default function UserPage(props) {
  const ctx = useContext(ThemeContext);
  console.log(ctx);
  // const { themeColor } = ctx;
  return (
    <div>
      <h3 style={{ color: "green" }}>UserContext</h3>
      {/* <h3 style={{ color: themeColor }}>UserContext</h3> */}
    </div>
  );
}
