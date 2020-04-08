import React from 'react';
import './WeatherResult.css'

export const WeatherResult = ({ weatherResult }) => {
  return (
    <div className='result-container'>
      <h1 className='head'>Current Weather</h1>
      <h2 className='result-text'>{weatherResult.summary}</h2>
    </div>
  )
}
