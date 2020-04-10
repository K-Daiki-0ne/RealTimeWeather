import React, { useState, useEffect } from 'react';
import { getWeather } from '../../api/weather'
import { WeatherLoading } from './WeatherLoading/WeatherLoading';
import { WeatherResult } from './WeatherResult/WeatherResult';

export const WeatherComponent = ({ location }) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  let params = {}

  useEffect(() => {
    const data = window.location.search.substring(1)
    data.split('&').forEach( param => {
      const temp = param.split('=')
      params = {
        ...params,
        [temp[0]]: temp[1]
      }
    })
  }, []);

  useEffect(() => {
    getWeather(params.lon, params.lat)
      .then(data => setWeather(data.currently))
      .then(setLoading(true))
  }, [setLoading])
  return (
    loading
      ? (
        <div className="weather-container">
          <WeatherResult weatherResult={weather} />
        </div>
      )
      : (
        <div className="weather-container">
          <WeatherLoading />
        </div>
      )
  )
}