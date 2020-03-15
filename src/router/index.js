import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Weather } from '../views/Weather';

export const RouterView = () => {
  return (
    <Router>
      <Route path="/" exact component={Weather} />
    </Router>
  )
}