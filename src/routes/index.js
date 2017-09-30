import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Register from './Register';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/register" exact render={() => <Register />} />
    </Switch>
  </BrowserRouter>
);
