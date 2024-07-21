import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: 0,
    description: "",
    humidity: 0,
    wind: 0,
    time: 0,
    icon: "",
  });
  const [forecastData, setForecastData] = useState([]);

  const exchange = useCallback((response) => {
    const data = response.data;
    setWeatherData({
      city: data.city,
      temperature: Math.round(data.temperature.current),
      description: data.condition.description,
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      time: data.time,
      icon: data.condition.icon_url,
    });
    getForecast(data.city);
  }, []);

  const call = useCallback(
    (city) => {
      const apiKey = `d860d36baeo33ebcafd4ec2d01tf4406`;
      const apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiurl).then(exchange);
    },
    [exchange]
  );

  useEffect(() => {
    call("paris");
  }, [call]);

  const getForecast = useCallback((city) => {
    const apiKey = `d860d36baeo33ebcafd4ec2d01tf4406`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then((response) => {
      setForecastData(response.data.daily);
    });
  }, []);

  const formdate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getDay()];
    return `${day} ${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const forecastdisplay = () => {
    return forecastData.map((day, index) => {
      if (index < 5) {
        return (
          <div className="weather-forecast-day" key={index}>
            <div className="weather-forecast-date">{formatDay(day.time)}</div>
            <img
              src={day.condition.icon_url}
              className="weather-forecast-icon"
              alt="icon"
            />
            <div className="weather-forecast-temperatures">
              <div className="weather-forecast-temperature">
                <strong>{Math.round(day.temperature.maximum)}º</strong>
              </div>
              <div className="weather-forecast-temperature">
                {Math.round(day.temperature.minimum)}º
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.SearchInput.value;
    call(city);
  };

  return (
    <div>
      <header>
        <form id="searchform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city"
            required
            className="SearchInput"
            id="SearchInput"
          />
          <input type="submit" value="Search" className="submitButtom" />
        </form>
      </header>
      <main>
        <div className="temperature">
          <div>
            <h1 id="city">{weatherData.city}</h1>
            <div id="weatherdetails">
              <div>
                <span id="time">{formdate(weatherData.time)}</span>,
                <span id="description">{weatherData.description}</span>
              </div>
              <div>
                Humidity:<strong id="humidity">{weatherData.humidity}%</strong>,
                Wind:<strong id="wind">{weatherData.wind} km/h</strong>
              </div>
            </div>
          </div>
          <div className="change">
            <span id="temperatureicon">
              <img src={weatherData.icon} className="weathericon" alt="icon" />
            </span>
            <span id="temperaturechange">{weatherData.temperature}</span>
            <span className="unit">ºC</span>
          </div>
        </div>
        <div className="weatherforecast" id="forecast">
          {forecastdisplay()}
        </div>
      </main>
    </div>
  );
}
