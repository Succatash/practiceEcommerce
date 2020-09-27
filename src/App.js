import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepages/homepage";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user.B.__proto__);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signup" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
