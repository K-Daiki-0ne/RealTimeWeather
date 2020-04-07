import React, { useState, useEffect } from 'react';
import { getLocation } from '../../utils/location';
import { Link } from 'react-router-dom';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeText } from './HomeText/HomeText';
import './HomeComponent.css'

export const HomeComponent = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    getLocation().then(data => setLocation(data));
  }, [])

  return (
    <div className="home-container">
      <HomeHeader />
      <HomeText />
      <div className="home-button">
        <Link to={`/result?lat=${location.lat}&lon=${location.lon}`}>
          <button className="material-icons">search</button>
        </Link>
      </div>
    </div>
  )
}