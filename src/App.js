import React, { useState } from "react";
import IndexPage from "./pages/IndexPage";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";
import BottomNav from "./components/BottomNav";
// import SetStatePage from "./components/Demo/SetStatePage";
// import LifeCyclePage from "./components/Demo/LifeCyclePage";
import ReduxPage from "./components/Demo/ReduxPage";

function App() {
  const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      {/* <SetStatePage /> */}
      {/* <LifeCyclePage /> */}
      <ReduxPage />
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
