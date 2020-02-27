const axios = require('axios');

async function fetchWeatheByLocation(location) {
  const KEY = 'becbe4e9d473ccea533627e27c377aad';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${KEY}`;
  console.log(url);
  const promRequest = axios.get(url, { mode: 'cors' });
  const response = await promRequest;
  getWeatherResponse(response)
  // howIsTheWeather('Tijuana');
  return response;
}

const getWeatherResponse = (response) => {
  console.log(`We are in ${response.data.name}, ${response.data.sys.country}`);
  console.log(response.data.main.temp);

  console.log(`Temp in C: ${celsius(response.data.main.temp)}`);
  console.log(`Temp in F: ${fahrenheit(response.data.main.temp)}`);

  console.log(`Temp Feels like in C: ${celsius(response.data.main.feels_like)}`);
  console.log(`Temp Feels like in F: ${fahrenheit(response.data.main.feels_like)}`);

  console.log(`Temp Min in C: ${celsius(response.data.main.temp_min)}`);
  console.log(`Temp Min in F: ${fahrenheit(response.data.main.temp_min)}`);

  console.log(`Temp Max in C: ${celsius(response.data.main.temp_max)}`);
  console.log(`Temp Max in F: ${fahrenheit(response.data.main.temp_max)}`);

  let result = {};

  result.tempC = celsius(response.data.main.temp);
  result.tempF = fahrenheit(response.data.main.temp);
  result.feelLikeC = celsius(response.data.main.feels_like);
  result.feelLikeF = fahrenheit(response.data.main.feels_like);
  result.minC = celsius(response.data.main.temp_min);
  result.minF = fahrenheit(response.data.main.temp_min);
  result.maxC = celsius(response.data.main.temp_max);
  result.maxF = fahrenheit(response.data.main.temp_max);

  console.log(result);
  return result
}

const celsius = (number) => {
  return (parseFloat(number) - 273.15).toFixed(1);
}

const fahrenheit = (number) => {
  return ((parseFloat(number) - 273.15) * (9 / 5) + 32).toFixed(1);
}


export default fetchWeatheByLocation;
