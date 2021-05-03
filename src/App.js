import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./components/login.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Log from "./components/logf.js";


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header/>
             <Login/>
            </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/logf" component={Log}>
          </Route>
          </Switch>
        </Router>


    </div>
  );
}

export default App;