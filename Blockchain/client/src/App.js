import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {ViewUser} from "./components/ViewUser";

import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/login" />
            <Route path={"/"} component={Root}>
                <Route path={"home"} component={Home} />     
                <Route path={"login"} component={Login} />     
                <Route path={"viewuser"} component={ViewUser} />      
            </Route>                 
        </Router>
    );
  }
}

export default App;
