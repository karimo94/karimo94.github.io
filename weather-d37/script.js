const apiKey = '8b4c7c70ae5a3d990c7411428f66e1bb';
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
    //let nextWeatherData = grabForecast();
    renderData(curWeatherData, nextWeatherData);
}

function renderData(data1, dataArray) {

}

async function grabNowWeather() {
    let data = null;

    let response = await fetch(currentWeatherEndpoint + apiKey, {
        method: 'GET', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    alert(response.json());

    return data;
}

function grabForecast() {
    let request = new XMLHttpRequest();
    let data = null;
    request.open('GET', forecastEndpoint);
    request.onload = function() {
        let responseData = JSON.parse(request.response);
        console.log(responseData);
        if (request.status === 200) {
            data = responseData;
        }
    }
    request.send();
    console.log(data);
    return data;
}


function kelvinToCelsius(input) {
    return input - 273.15;
}

function kelvinToFahr(input) {
    return (input - 273.15) * (9 / 5) + 32;
}