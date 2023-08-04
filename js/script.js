// Variables
let
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind'),
    searchBtn = document.querySelector('.search button'),
    searchIn = document.querySelector('.search input'),
    weather = document.querySelector('.weather'),
    weatherStatus = document.querySelector('.description'),
    citiesData = {
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

searchBtn.addEventListener('click', () => {
    let searchInputValue = searchIn.value
    let lowerValue = searchInputValue.toLowerCase()
    let mainData = citiesData[lowerValue]

    if (mainData) {
        city.innerHTML = `Weather in ${mainData.city}`
        temp.innerHTML = `${mainData.temp}°C`
        weatherStatus.innerHTML = `${mainData.weather}`
        humidity.innerHTML = `Humidity: ${mainData.humidity}`
        wind.innerHTML = `Wind speed: ${mainData.wind} km/h`
        weather.classList.remove('loading')
    } else {
        alert('این صفحه یک تست است و از شهر های زیادی استفاده نکردم . لطفا شهر دیگری را استفاده کنید\n - This page is an exercise and I did not use many cities.Please use another city')
    }
})

