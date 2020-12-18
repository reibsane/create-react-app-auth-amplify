import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import Logout from './Logout/Logout';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import Chart from './Charts/Chart';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';

class App extends Component {
  render() {
    return (
      <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/logout">
            <Logout/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
            <Chart/>
            <Chart2/>
            <Chart3/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </div>
      
      <Footer/>
    </Router>
    );
  }
}

export default withAuthenticator(App, true);
