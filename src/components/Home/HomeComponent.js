import React, { useState, useEffect } from 'react';
import { getLocation } from '../../utils/location';
import { HomeHeader } from './HomeHeader/HomeHeader';
import './HomeComponent.css'

export const HomeComponent = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    getLocation().then(data => setLocation(data));
  }, [])

  return (
    <div className="HomeContainer">
      <HomeHeader />
    </div>
  )
}