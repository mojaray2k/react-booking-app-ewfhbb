import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import Login from './Components/Login';
import ErrorPage from './ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <Main />
          <div className="main_wrapper">
            <Wrapper />
          </div>
          <Switch>
            <Route path={"/login"} component={Login} /> />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
