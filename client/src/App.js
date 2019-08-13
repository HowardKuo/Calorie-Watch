import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import Nav from './components/Navbar';
import FooterPage from './components/Footer';
import Wrapper from "./components/Wrapper";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";

import store from "./store";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "/";
	}
}

class App extends Component  {  
  render() {
    return (
      <Provider store={store}>
      <Router>
        
        <Nav />
        <Switch>
          
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
        </Wrapper>
        </Switch>
        <FooterPage />
      
      </Router>
      </Provider>
    );
    }
  }

export default App;