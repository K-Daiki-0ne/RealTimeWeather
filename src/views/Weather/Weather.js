import React from 'react';
import { WeatherComponent } from '../../components/Weather/WeatherComponent';
import './Weather.css';

export const Weather = () => {
  return (
    <div className="weather">
      <WeatherComponent />
    </div>
  )
}