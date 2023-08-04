﻿// Declare variables to select the elements from the HTML page
let city = document.querySelector('.city'); // To display the city name
let temp = document.querySelector('.temp'); // To display the temperature
let humidity = document.querySelector('.humidity'); // To display the humidity percentage
let wind = document.querySelector('.wind'); // To display the wind speed
let searchBtn = document.querySelector('.search button'); // To select the search button
let searchInput = document.querySelector('.search input'); // To select the search input
let weather = document.querySelector('.weather'); // To select the weather container
let weatherStatus = document.querySelector('.description'); // To display the weather status

// Declare an object to store weather data for different cities
let citiesData = {
    tehran: { city: 'Tehran', temp: '33', weather: 'Sunny', humidity: '20%', wind: '2.6' },
    shiraz: { city: 'Shiraz', temp: '3', weather: 'Snow', humidity: '60%', wind: '8.9' },
    bushehr: { city: 'Bushehr', temp: '9', weather: 'Rainy', humidity: '40%', wind: '9.2' },
    berlin: { city: 'Berlin', temp: '15', weather: 'Tornado', humidity: '12%', wind: '16.5' },
    tabriz: { city: 'Tabriz', temp: '7', weather: 'Thunder', humidity: '10%', wind: '11.3' },
    rasht: { city: 'Rasht', temp: '-10', weather: 'Ice storm', humidity: '5%', wind: '17.1' },
    abadan: { city: 'Abadan', temp: '9', weather: 'Lightning', humidity: '9%', wind: '12.7' },
    paris: { city: 'Paris', temp: '11', weather: 'Wind', humidity: '20%', wind: '18.4' },
    roma: { city: 'Roma', temp: '13', weather: 'Heat wave', humidity: '90%', wind: '3.2' },
    milan: { city: 'Milan', temp: '4', weather: 'Sunshine', humidity: '30%', wind: '2.3' },
    washington: { city: 'Washington DC', temp: '8', weather: 'Overcast', humidity: '60%', wind: '3.2' },
    losAngeles: { city: 'Los Angeles', temp: '-7', weather: 'Winter storm', humidity: '10%', wind: '6.2' },
    NewYork: { city: 'New York', temp: '6', weather: 'Rainy', humidity: '40%', wind: '6.2%' },
    istanbul: { city: 'Istanbul', temp: '11', weather: 'Wind', humidity: '20%', wind: '18.4%' },
    madrid: { city: 'Madrid', temp: '5', weather: 'Storm', humidity: '30%', wind: '14.7' },
    london: { city: 'London', temp: '1', weather: 'Hail', humidity: '50%', wind: '8.6' },
    barcelona: { city: 'Barcelona', temp: '9', weather: 'Heat wave', humidity: '90%', wind: '3.2' },
};

// Add an event listener to the search button
searchBtn.addEventListener('click', () => {
    // Get the value of the search input
    let searchInputValue = searchInput.value;
    // Convert the search input value to lowercase
    let lowerValue = searchInputValue.toLowerCase();
    // Get the weather data for the searched city
    let mainData = citiesData[lowerValue];

    // If the weather data for the searched city exists
    if (mainData) {
        // Display the weather data for the searched city
        city.innerHTML = `Weather in ${mainData.city}`;
        temp.innerHTML = `${mainData.temp}°C`;
        weatherStatus.innerHTML = `${mainData.weather}`;
        humidity.innerHTML = `Humidity: ${mainData.humidity}`;
        wind.innerHTML = `Wind speed: ${mainData.wind} km/h`;
        weather.classList.remove('loading');
    } else {
        // Display an alert message if the weather data for the searched city does not exist
        alert('این صفحه یک تست است و از شهر های زیادی استفاده نکردم . لطفا شهر دیگری را استفاده کنید\n - This page is anexercise and I did not use many cities.Please use another city');
    }
});

