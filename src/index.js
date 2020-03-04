import fetchWeatherByLocation from './js/APIService';

const search = document.querySelector('#search');
const cel = document.querySelector('#cel');
const fah = document.querySelector('#fah');
const city = document.querySelector('#city');
const title = document.querySelector('#title');
const feelsLike = document.querySelector('#feels');
const max = document.querySelector('#max');
const min = document.querySelector('#min');

const getWeatherCel = (city) => {
  const weatherData = fetchWeatherByLocation(city);
  weatherData.then((data) => {
    title.innerHTML = `The Weather in ${city} is ${data.tempC} °C`;
    feelsLike.innerHTML = `Feels Like : ${data.feelLikeC} °C`;
    max.innerHTML = `Max : ${data.maxC} °C`;
    min.innerHTML = `Min : ${data.minC} °C`;
    if (parseInt(data.tempC, 10) < 17) {
      document.body.style.backgroundColor = '#CEE7E6';
      title.style.color = '#2541B2';
    } else {
      document.body.style.backgroundColor = '#EA9E8D';
      title.style.color = '#EA9E8D';
    }
  }).catch((error) => {
    console.log(`Something was wrong ${error}`);
    title.innerHTML = 'Snap! Probably is not a valid city or entry :( !';
    title.style.color = 'red';
  });
};

const getWeatherFah = (city) => {
  const weatherData = fetchWeatherByLocation(city);
  weatherData.then((data) => {
    title.innerHTML = `The Weather in ${city} is ${data.tempF} °F`;
    feelsLike.innerHTML = `Feels Like : ${data.feelLikeF} °F`;
    max.innerHTML = `Max : ${data.maxF} °F`;
    min.innerHTML = `Min : ${data.minF} °F`;
    if (parseInt(data.tempC, 10) < 17) {
      document.body.style.backgroundColor = '#CEE7E6';
      title.style.color = '#2541B2';
    } else {
      document.body.style.backgroundColor = '#EA9E8D';
      title.style.color = '#EA9E8D';
    }
  }).catch((error) => {
    console.log(`Something was wrong ${error}`);
    title.innerHTML = 'Snap! Probably is not a valid city or entry :( !';
    title.style.color = 'red';
  });
};

search.addEventListener('click', (event) => {
  event.preventDefault();
  if (city.value) {
    getWeatherCel(city.value);
  } else {
    title.innerHTML = 'Snap! No city is added in the search input :( !';
    title.style.color = 'red';
  }
});

cel.addEventListener('click', () => {
  if (city.value) {
    getWeatherCel(city.value);
  } else {
    title.innerHTML = 'Snap! No city is added in the search input :( !';
    title.style.color = 'red';
  }
});

fah.addEventListener('click', () => {
  if (city.value) {
    getWeatherFah(city.value);
  } else {
    title.innerHTML = 'Snap! No city is added in the search input :( !';
    title.style.color = 'red';
  }
});