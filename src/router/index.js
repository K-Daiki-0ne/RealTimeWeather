import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../views/Home/Home';
import { Weather } from '../views/Weather/Weather';

export const RouterView = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/result" component={Weather} />
    </Router>
  )
}