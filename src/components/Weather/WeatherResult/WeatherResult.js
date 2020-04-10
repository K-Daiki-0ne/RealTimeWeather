import React from 'react';
import { useTime } from '../../../hook/useTime';
import './WeatherResult.css'

export const WeatherResult = ({ weatherResult }) => {
  const time = useTime()
  return (
    <div className='result-container'>
      <h1 className='head'>Current Weather</h1>
      <p className='now-time'>{time}</p>
      <h2 className='result-text'>{weatherResult.summary}</h2>
    </div>
  )
}
