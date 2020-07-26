import React, { Component } from "react";
import styles from "./index.module.scss";
const menu = [
  {
    title: "首页",
    link: "/",
    icon: "1",
  },
  {
    title: "购物车",
    link: "/card",
    icon: "icon-",
  },
  {
    title: "订单列表",
    link: "/orderlist",
    icon: "tubiaolunkuo-",
  },
  {
    title: "我的",
    link: "/user",
    icon: "tubiaolunkuo-",
  },
];

export default class BottomNav extends Component {
  render() {
    // console.log("this.props===", this.props);
    const { activeNum, setActiveNum } = this.props;
    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <MenuItem
            key={item.link}
            {...item}
            active={activeNum === index}
            onClick={() => setActiveNum(index)}
          />
        ))}
      </div>
    );
  }
}

function MenuItem({ title, icon, active, onClick }) {
  return (
    <div
      className={(active ? styles.selected + " " : "") + styles.MenuItem}
      onClick={onClick}
    >
      <span className={"iconfont icon-" + icon}></span>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
