// Version : 1.0
// Developer : @HAMEDPYN
// Date : 08 / 17 2023

// DOM Selectors

// To display the city name
let city = document.querySelector('.city'),
    // To display the temperature
    temp = document.querySelector('.temp'),
    // To display the humidity percentage
    humidity = document.querySelector('.humidity'),
    // To display the wind speed
    wind = document.querySelector('.wind'),
    // To select the search button
    searchBtn = document.querySelector('.search button'),
    // To select the search input
    searchInput = document.querySelector('.search input'),
    // To select the weather container
    weather = document.querySelector('.weather'),
    // To display the weather status
    weatherStatus = document.querySelector('.description');


// Keyboard event
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        displayWeather()
    }
})
function displayWeather() {
    // Get the value of the search input
    let searchInputValue = searchInput.value;
    // Get the weather data for the searched city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=metric&appid=5986e34809c3c329649d1f7703faa5e9`).then(res => res.json()).then(data => {
        if (data.name === undefined) {
            alert(`شهر شما وجود خارجی ندارد. \n Your city doesn't exist.`)
        } else {
            // Display the weather data for the searched city
            city.innerHTML = `Weather in ${data.name}`;
            temp.innerHTML = `${data.main.temp}°C`;
            weatherStatus.innerHTML = `${data.weather[0].main}`;
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            wind.innerHTML = `Wind speed: ${data.wind.speed} km/h`;
            weather.classList.remove('loading');
        }
    })
}

// Add an event listener to the search button
searchBtn.addEventListener('click', displayWeather)