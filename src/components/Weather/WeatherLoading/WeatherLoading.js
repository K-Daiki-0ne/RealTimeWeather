import React from 'react';
import './WeatherLoading.css'

export const WeatherLoading = () => {
  return (
  <div class="container">
    <div class="circles-wrapper">
      <div class="circle circle-lg">
        <div class="circle circle-md">
          <div class="circle circle-sm"></div>
        </div>
      </div>
    </div>
  </div>
  )
}