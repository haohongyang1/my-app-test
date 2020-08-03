import React, { useState } from "react";
// import IndexPage from "./pages/IndexPage";
// import ContextPage from "./pages/0725/ContextPage";
// import CartPage from "./pages/CartPage";
// import OrderListPage from "./pages/OrderListPage";
// import UserPage from "./pages/UserPage";
import BottomNav from "./components/BottomNav";
// import HocPage from "./pages/0725/HocPage";
// import SetStatePage from "./components/Demo/SetStatePage";
// import LifeCyclePage from "./components/Demo/LifeCyclePage";
import ReactReduxHooksPage from "./components/Demo/ReactReduxHooksPage";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// import HooksPage from "./components/Demo/HooksPage";
function App() {
  const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/cart">购物车</Link>
        <Link to="/product/123">商品</Link> */}
      {/* 配置 */}
      {/* <Switch>
          <Route exact path="/" component={ContextPage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/list" component={OrderListPage}></Route>
        </Switch> */}
      {/* </Router> */}
      {/* {activeNum === 0 && <IndexPage />} */}
      {/* {activeNum === 0 && <ContextPage />} */}
      {/* {activeNum === 0 && <HocPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />} */}
      {/* <SetStatePage /> */}
      {/* <LifeCyclePage /> */}
      {/* <ReactReduxHooksPage /> */}
      {/* <HooksPage /> */}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
