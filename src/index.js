import fetchWeatheByLocation from './js/APIService';


// fetchWeatheByLocation('Tijuana');

const search = document.querySelector('#search');

search.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Hello Weather app')
    console.log("=================");
    const city = document.querySelector('#city')
    if (city.value) {
        console.log(`Your city is: ${city.value}`)
        fetchWeatheByLocation(city.value);
    } else {
        console.log(`No city in search input`);
    }
    console.log("=================");
    
});

