import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
//import logo from './logo.svg';
import Nav from './components/Navbar';
import FooterPage from './components/Footer';
import Wrapper from "./components/Wrapper";
//import './App.css';

class App extends Component  {  
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
        </Wrapper>
        <FooterPage />
        </div>
      </Router>
    );
    }
  }

export default App;