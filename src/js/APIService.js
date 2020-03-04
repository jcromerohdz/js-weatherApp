const axios = require('axios');

const getWeatherResponse = (responseCel, responseFah) => {
  const result = {};

  result.tempC = responseCel.data.main.temp;
  result.tempF = responseFah.data.main.temp;
  result.feelLikeC = responseCel.data.main.feels_like;
  result.feelLikeF = responseFah.data.main.feels_like;
  result.minC = responseCel.data.main.temp_min;
  result.minF = responseFah.data.main.temp_min;
  result.maxC = responseCel.data.main.temp_max;
  result.maxF = responseFah.data.main.temp_max;
  return result;
};

async function fetchWeatherByLocation(location) {
  const KEY = 'becbe4e9d473ccea533627e27c377aad';
  const unitCel = 'Metric';
  const unitFah = 'Imperial';
  const urlCel = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitCel}&APPID=${KEY}`;
  const urlFah = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitFah}&APPID=${KEY}`;
  const promRequestCel = axios.get(urlCel, { mode: 'cors' });
  const promRequestFah = axios.get(urlFah, { mode: 'cors' });
  const responseCel = await promRequestCel;
  const responseFah = await promRequestFah;


  return getWeatherResponse(responseCel, responseFah);
}


export default fetchWeatherByLocation;
