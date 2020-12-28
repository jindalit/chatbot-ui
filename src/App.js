import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProtectedRoute } from './protected.route'
import Login from './components/login';
import Reset from './components/reset';
import Chat from './components/chat';
import Signup from './components/signup';
import Home from './components/home';

export default () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        {/* <ProtectedRoute path="/about" component={About} /> */}
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Reset} />
        <ProtectedRoute path="/chat" component={Chat} />
        <Route path='/Signup' component={Signup} />
        <Route path="*">
          <img src={process.env.PUBLIC_URL + 'images/login.png'} className="img-fluid w-80" alt="" />
          No Match
            </Route>
      </Switch>
    </Router >
  );
}

