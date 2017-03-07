import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Beranda from './components/Beranda';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Beranda}>
      
      </Route>
    </Router>
  );
};

export default Routes;
