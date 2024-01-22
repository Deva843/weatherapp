import React, { useState } from 'react';
import axios from 'axios';


const WeatherApp = () => {
const [city,setCity] = useState('');
const [weatherData,setWeatherData]  = useState(null)
const apiKey = "64335aa7daac48ec18b9dfe71f4b154b"
async function handleSubmit(e){
    e.preventDefault();
    console.log(city);
   try{ 
    let response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q: city,
            appid: apiKey,
            units: 'metric', // or 'imperial' for Fahrenheit or metric
          },
    })
    console.log(response.data);
    setWeatherData(response.data);
    } 
    catch(error)
    {
        console.error(error);
        alert("enter valid city..!")
    } 

}
  return (
    <div>
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="enter city name"onChange = {e=>setCity(e.target.value)}
                value ={city}
                 />
                 <button type="submit">GET DATA</button>
            </form>
        </div>
        {weatherData && <div>
        <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
            
            </div>}
    </div>
  )
}

export default WeatherApp