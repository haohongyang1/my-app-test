import React, { useState } from "react";
// import IndexPage from "./pages/IndexPage";
// import ContextPage from "./pages/0725/ContextPage";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";
import BottomNav from "./components/BottomNav";
import HocPage from "./pages/0725/HocPage";
// import SetStatePage from "./components/Demo/SetStatePage";
// import LifeCyclePage from "./components/Demo/LifeCyclePage";
// import ReduxPage from "./components/Demo/ReduxPage";
import store from "./store/index";
function App() {
  const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {/* {activeNum === 0 && <IndexPage />} */}
      {/* {activeNum === 0 && <ContextPage />} */}
      {activeNum === 0 && <HocPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      {/* <SetStatePage /> */}
      {/* <LifeCyclePage /> */}
      {/* <ReduxPage /> */}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
