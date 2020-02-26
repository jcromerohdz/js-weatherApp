const axios = require('axios');

async function fetchWeatheByLocation(location) {
  const KEY = 'MyKey';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${KEY}`;
  console.log(url);
  const promRequest = axios.get(url, { mode: 'cors' });
  const response = await promRequest;
  printResponse(response)
  // howIsTheWeather('Tijuana');
  return response;
}

function getWeatherResponse(response) {
  console.log(`We are in ${response.data.name}, ${response.data.sys.country}`);
  console.log(response.data.main.temp);

  console.log(`Temp in C: ${(parseFloat(response.data.main.temp) - 273.15).toFixed(1)}`);
  console.log(`Temp in F: ${((parseFloat(response.data.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1)}`);

  console.log(`Temp Feels like in C: ${(parseFloat(response.data.main.feels_like) - 273.15).toFixed(1)}`);
  console.log(`Temp Feels like in F: ${((parseFloat(response.data.main.feels_like) - 273.15) * (9 / 5) + 32).toFixed(1)}`);

  console.log(`Temp Min in C: ${(parseFloat(response.data.main.temp_min) - 273.15).toFixed(1)}`);
  console.log(`Temp Min in F: ${((parseFloat(response.data.main.temp_min) - 273.15) * (9 / 5) + 32).toFixed(1)}`);

  console.log(`Temp Max in C: ${(parseFloat(response.data.main.temp_min) - 273.15).toFixed(1)}`);
  console.log(`Temp Max in F: ${((parseFloat(response.data.main.temp_min) - 273.15) * (9 / 5) + 32).toFixed(1)}`);

  let result = {};

  result.tempC = (parseFloat(response.data.main.temp) - 273.15).toFixed(1);
  console.log(result);

}


export default fetchWeatheByLocation;
