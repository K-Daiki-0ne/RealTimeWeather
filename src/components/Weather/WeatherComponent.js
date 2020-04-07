import React, { useState, useEffect } from 'react';
import { getWeather } from '../../api/weather'
import { WeatherLoading } from './WeatherLoading/WeatherLoading';

export const WeatherComponent = ({ location }) => {
  const [weather, setWeather] = useState({});
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
    console.log(params)
    getWeather(params.lon, params.lat).then(data => setWeather(data))
  }, [])
  return (
    <div className="weather-container">
      <WeatherLoading />
    </div>
  )
}