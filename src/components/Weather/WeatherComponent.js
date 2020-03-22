import React from 'react';
import { WeatherLoading } from './WeatherLoading/WeatherLoading';

export const WeatherComponent = () => {
  return (
    <div className="weather-container">
      <WeatherLoading />
    </div>
  )
}