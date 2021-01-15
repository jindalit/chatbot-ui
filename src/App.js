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
import Dashboard from './components/dashboard';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Reset} />
        <Route path='/Signup' component={Signup} />
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute path="/chat" component={Chat} />
        <Route path="*">
          <img src={process.env.PUBLIC_URL + 'images/login.png'} className="img-fluid w-80" alt="" />
          No Match
            </Route>
      </Switch>
    </Router >
  );
}

