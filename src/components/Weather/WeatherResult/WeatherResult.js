import React from 'react';

export const WeatherResult = ({ weatherResult }) => {
  return (
    <div>
      <h1>{weatherResult.summary}</h1>
    </div>
  )
}
