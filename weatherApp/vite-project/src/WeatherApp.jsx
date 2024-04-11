import React, { useState } from 'react'
import "./WeatherApp.css"
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
function WeatherApp() {
let [weatherInfo,setWeatherInfo]=useState({
  city: "Delhi",
  feelslike: 24.84,
  temp: 24.84,
  tempMin: 24.84,
  tempMax: 25.84,
  humidity: 24.84,
  weather: "haze",
});

let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
}
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
