import fetchWeatherByLocation from './js/APIService';


// fetchWeatheByLocation('Tijuana');

const search = document.querySelector('#search');
const cel = document.querySelector('#cel');
const fah = document.querySelector('#fah');
let city = document.querySelector('#city')
let title = document.querySelector('#title');
let feelsLike = document.querySelector('#feels');
let max = document.querySelector('#max');
let min = document.querySelector('#min');


search.addEventListener('click', (event) => {
	event.preventDefault();
	console.log('Hello Weather app')
	console.log("=================");
	
	if (city.value) {
		console.log(`Your city is: ${city.value}`)
		const weatherData = fetchWeatherByLocation(city.value);
		weatherData.then((data) => {
			title.innerHTML = `The Weather in ${city.value} is ${data.tempC} °C`;
			feelsLike.innerHTML = `Feels Like : ${data.feelLikeC} °C` ;
			max.innerHTML = `Max : ${data.maxC} °C`;
			min.innerHTML = `Min : ${data.minC} °C`;
			if (parseInt(data.tempC) < 17) {
				document.body.style.backgroundColor = '#CEE7E6';
			} else {
				document.body.style.backgroundColor = '#EA9E8D';
			}
		});
			
	} else {
		console.log(`No city in search input`);
	}
console.log("=================");
	
});

cel.addEventListener('click', (event) => {
	
	console.log('You Click Celsius!!!');
	console.log(city.value);

	if (city.value) {
		console.log(`Your city is: ${city.value}`)
		const weatherData = fetchWeatherByLocation(city.value);
		weatherData.then((data) => {
			title.innerHTML = `The Weather in ${city.value} is ${data.tempC} °C`;
			feelsLike.innerHTML = `Feels Like : ${data.feelLikeC} °C` ;
			max.innerHTML = `Max : ${data.maxC} °C`;
			min.innerHTML = `Min : ${data.minC} °C`;
			if (parseInt(data.tempC) < 17) {
				document.body.style.backgroundColor = '#CEE7E6';
			} else {
				document.body.style.backgroundColor = '#EA9E8D';
			}
		});
			
	} else {
		console.log(`No city in search input`);
	}
});

fah.addEventListener('click', (event) => {
	console.log('You Click Fahrenheit!!');

	if (city.value) {
		console.log(`Your city is: ${city.value}`)
		const weatherData = fetchWeatherByLocation(city.value);
		weatherData.then((data) => {
			title.innerHTML = `The Weather in ${city.value} is ${data.tempF} °F`;
			feelsLike.innerHTML = `Feels Like : ${data.feelLikeF} °F` ;
			max.innerHTML = `Max : ${data.maxF} °F`;
			min.innerHTML = `Min : ${data.minF} °F`;
			if (parseInt(data.tempF) < 60) {
				document.body.style.backgroundColor = '#CEE7E6';
			} else {
				document.body.style.backgroundColor = '#EA9E8D';
			}
		});
			
	} else {
		console.log(`No city in search input`);
	}

});