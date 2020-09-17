import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepages/homepage";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
