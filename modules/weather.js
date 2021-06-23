'use strict';

{
  const {load} = require(`./backend.js`);

  const API_KEY = `f7b76ea99715515b7517bc57fd796c02`;

  const getWeather = (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}&lang=ru&mode=json`;

    return new Promise((resolve, reject) => {
      load(url)
      .then((response) => {
        resolve({
          description: response.weather[0].description,
          temp: +response.main.temp,
          feelsLike: Math.round(+response.main.temp + +response.main.feels_like),
          wind: +response.wind.speed,
          name: response.name
        })
      })
      .catch((errorMessage) => {
         reject(errorMessage);
      })
    });
  };

  module.exports = {
    getWeather
  };
}
