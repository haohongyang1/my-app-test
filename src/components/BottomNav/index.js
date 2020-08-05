import React, { Component } from "react";
import styles from "./index.module.scss";
import ContextPage from "../../pages/0725/ContextPage";
import CartPage from "../../pages/CartPage";
import OrderListPage from "../../pages/OrderListPage";
import UserPage from "../../pages/UserPage";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Prompt,
  withRouter,
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Link,
//   // Switch,
//   Route,
//   Prompt,
//   withRouter,
// } from "../../source/my-react-router";
const menu = [
  {
    title: "首页",
    link: "/",
    icon: "1",
    comonent: ContextPage,
  },
  {
    title: "购物车",
    link: "/card",
    icon: "icon-",
    component: CartPage,
  },
  {
    title: "订单列表",
    link: "/orderlist",
    icon: "tubiaolunkuo-",
    component: OrderListPage,
  },
  {
    title: "我的",
    link: "/user",
    icon: "tubiaolunkuo-",
    component: UserPage,
  },
];

// 接入路由
export default class BottomNav extends Component {
  render() {
    let active = 0;
    let handleActive = (index) => {
      active = index;
      // this.forceUpdate();
    };
    return (
      <div>
        <Router>
          <div className={styles.main}>
            {menu.map((item, index) => {
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={
                    (active === index && styles.selected) +
                    " " +
                    styles.MenuItem
                  }
                  onClick={() => handleActive(index)}
                >
                  <span className={"iconfont icon-" + item.icon}></span>
                  <span className={styles.title}>{item.title}</span>
                </Link>
              );
            })}
            {/* <Link to="/user">用户中心</Link>
            <Link to="/cart">购物车</Link>
            <Link to="/product/123">商品</Link> */}
          </div>
          {/* 配置 */}
          {/* <Switch> */}
          <Route exact path="/" component={ContextPage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/product/:id" render={() => <Product />} />

          <Route
            path="/orderlist"
            component={OrderListPage}
            // render={() => <Product />}
          ></Route>
          {/* </Switch> */}
        </Router>
      </div>
    );
  }
  // render() {
  //   // console.log("this.props===", this.props);
  //   const { activeNum, setActiveNum } = this.props;
  //   return (
  //     <div className={styles.main}>
  //       {menu.map((item, index) => (
  //         <MenuItem
  //           key={item.link}
  //           {...item}
  //           active={activeNum === index}
  //           onClick={() => setActiveNum(index)}
  //         />
  //       ))}
  //     </div>
  //   );
  // }
}

// function MenuItem({ title, icon, active, link }) {
//   return (
//     <Link
//       className={(active ? styles.selected + " " : "") + styles.MenuItem}
//       // onClick={onClick}
//       to={link}
//     >
//       <span className={"iconfont icon-" + icon}></span>
//       <span className={styles.title}>{title}</span>
//     </Link>
//   );
// }

@withRouter
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: true };
    console.log("2222");
  }

  render() {
    const { params } = this.props.match;
    const { id } = params;
    console.log("props", this.props); //sy-log
    return (
      <div>
        Product:{id}
        <Prompt
          when={this.state.confirm}
          message="Are you sure you want to leave?"
          // message={(location) => {
          //   return "Are you sure you want to leave-fun";
          // }}
        />
      </div>
    );
  }
}
