import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from "./components/Header";
import Courses from "./components/Courses";



export default () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Courses} />
      </Switch>

    </div>
  </Router>
);
