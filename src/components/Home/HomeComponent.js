import React, { useState, useEffect } from 'react';
import { getLocation } from '../../utils/location';
import { Link } from 'react-router-dom';
import './HomeComponent.css'

export const HomeComponent = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    getLocation().then(data => setLocation(data));
  }, [])

  return (
    <div className="home-container">
      <div className="home-head">
        <h1>Weather App</h1>
      </div>
      <div className="home-text">
        <p>This application checks the weather where you are now .</p><br/>
        <p className="home-margin">If you want to use this application that you click the button below</p>
      </div>
      <div className="home-button">
        <Link to={`/result?lat=${location.lat}&lon=${location.lon}`}>
          <button className="material-icons">search</button>
        </Link>
      </div>
    </div>
  )
}