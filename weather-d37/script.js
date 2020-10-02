const apiKey = 'f6021935fb17421b4b4cb04040a2c204';
const currentWeatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=' + apiKey;
const forecastEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=' + apiKey;
const sun = '<i class="fas fa-sun" style="color: #ff9a76"></i>';
const fog = '<i class="fas fa-smog" style="color: rgb(192, 192, 192)"></i>';
const rain = '<i class="fas fa-cloud-showers-heavy" style="color: rgb(0, 128, 255)"></i>';
const partlyClouds = '<i class="fas fa-cloud-sun" style="color: #ffeadb"></i>';
const overcast = '<i class="fas fa-cloud" style="#679b9b"></i>';
const snows = '<i class="fas fa-snowflake" style="color: rgb(106, 90, 205)"></i>';
var tempNowElement = document.getElementById("tempNow");
var iconNowElement = document.getElementById("iconNow");

/*$(document).ready(function() {
    let curWeatherData = grabNowWeather();
    let nextWeatherData = grabForecast();
    renderData(curWeatherData, nextWeatherData);
});*/
function refresh() {
    const curWeatherData = grabNowWeather();
    alert(curWeatherData);
    //let nextWeatherData = grabForecast();
    //renderData(curWeatherData, nextWeatherData);
}

function renderData(data1, dataArray) {

}

function grabNowWeather() {
    var data = null;

    var request = new XMLHttpRequest();
    request.open('GET', currentWeatherEndpoint + apiKey);

    alert(request.status);

    request.onload = function() {
        var jsonData = JSON.parse(this.response);
        data = jsonData
        return data;
    }

    request.send();
    alert(request.status);

    return data;
}

function grabForecast() {
    //placeholder
}


function kelvinToCelsius(input) {
    return input - 273.15;
}

function kelvinToFahr(input) {
    return (input - 273.15) * (9 / 5) + 32;
}