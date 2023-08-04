// Variables
let
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind'),
    searchBtn = document.querySelector('.search button'),
    searchIn = document.querySelector('.search input'),
    weather = document.querySelector('.weather'),
    citiesData = {
        Tehran: { city: 'Tehran', temp: '33',weather:'Sunny' , humidity: '20%', wind: '2.6' },
        Shiraz: { city: 'Shiraz', temp: '3', weather:'Snow' , humidity: '60%', wind: '8.9' },
        NewYork: { city: 'NewYork', temp: '9', weather:'Rainy' , humidity: '40%', wind: '6.2' },
    }

