import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from "./components/partials/Navbar";
import NotFound from "./components/errors/NotFound";
import Index from './components/pages/Index';

//====================
// do i need context component?
//====================


export default () => (
  <Router>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/notfound" component={NotFound} />
        <Redirect from='*' to='/notfound' />
      </Switch>

    </div>
  </Router>
);
