import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscripeFromAuth = null;

  componentDidMount() {
    this.unsubscripeFromAuth = auth.onAuthStateChanged(user => { 
      this.setState({currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
