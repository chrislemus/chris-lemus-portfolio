import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from "./components/Header";
import Courses from "./components/Courses";
import NotFound from "./components/errors/NotFound";



export default () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Courses} />
        <Route path="/notfound" component={NotFound} />
        <Redirect from='*' to='/notfound' />
      </Switch>

    </div>
  </Router>
);
