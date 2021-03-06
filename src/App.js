import React, { Component } from 'react';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
import Usr_input from './usr_input/usr_input';
import Chart from './Charts/Chart';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


Amplify.configure(aws_exports);



class App extends Component {
  render() {
    return (
      <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
            <Usr_input/>
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
