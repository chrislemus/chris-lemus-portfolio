import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from "./components/partials/Navbar";
import Header from "./components/Header";
import NotFound from "./components/errors/NotFound";
import MainPage from './components/MainPage';



export default () => (
  <Router>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/notfound" component={NotFound} />
        <Redirect from='*' to='/notfound' />
      </Switch>

    </div>
  </Router>
);
