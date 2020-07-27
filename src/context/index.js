/**
 * React context:
 * 定义：相当于 Vue中的 provider/inject
 * 使用步骤：
 * 1、创建：createContext();
 * 2、创建Provider：
 * 3、引入该context：
 * 4、传递value值：
 * 5、获取：ThemeProvider上的所有子孙组件都可以获取到value值；
 */
import React from "react";
export const ThemeContext = React.createContext();
export const ThemeProvider = ThemeContext.Provider;
