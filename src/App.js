import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

import WithSpinner from "./components/with-spinner/with-spinner.component";

import { checkUserSession } from "./redux/user/user.actions";

const HomePageWithSpinner = WithSpinner(HomePage);

const App = ({ checkUserSession, currentUser }) => {
  const [isLoading] = useState({ loading: null });

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const { loading } = isLoading;
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePageWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
