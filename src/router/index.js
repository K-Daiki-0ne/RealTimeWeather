import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '../views/Home';
import { Weather } from '../views/Weather';

export const Route = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/result" component={Weather} />
    </Router>
  )
}