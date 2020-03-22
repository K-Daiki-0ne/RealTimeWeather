import React from 'react';
import { LoadingText } from './LoadingText/Loadngtext'
import './WeatherLoading.css'

export const WeatherLoading = () => {
  return (
  <div className="container">
    <div className="load-container">
      <div className="circles-wrapper">
        <div className="circle circle-lg">
          <div className="circle circle-md">
            <div className="circle circle-sm"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="loading-text">
      <LoadingText />
    </div>
  </div>
  )
}