const apiKey = 'f6021935fb17421b4b4cb04040a2c204';
const currentWeatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=' + apiKey;
const forecastEndpoint = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.6062&lon=-122.3321&exclude=alerts,current,minutely,hourly&appid=' + apiKey;
const sun = '<i class="fas fa-sun" style="color: #ff9a76"></i>';
const fog = '<i class="fas fa-smog" style="color: darkgrey"></i>';
const rain = '<i class="fas fa-cloud-showers-heavy" style="color: rgb(0, 128, 255)"></i>';
const partlyClouds = '<i class="fas fa-cloud-sun" style="color: #ffeadb"></i>';
const overcast = '<i class="fas fa-cloud" style="#679b9b"></i>';
const snows = '<i class="fas fa-snowflake" style="color: rgb(106, 90, 205)"></i>';
const background_sun = 'clearskies.jpg';
const background_clouds = 'cloudyfog.jpg';
const background_rain = 'rainwet.jpg';
const background_snow = 'snowcover.jpg';
var fullCardBody = document.getElementById("appBody");
var tempNowElement = document.getElementById("tempNow");
var iconNowElement = document.getElementById("iconNow");
var descNowElement = document.getElementById("descNow");
var windNowElement = document.getElementById("windNow");
var speedNowElement = document.getElementById("speedNow");
var humNowElement = document.getElementById("humNow");
var currentWeatherData = null;
var forecastWeatherData = null;
var metricFlag = true; //used for C/F options

$(document).ready(function() {
    grabNowWeatherAndRender();
    grabForecastAndRender();
});

function refresh(event) {
    event.preventDefault();
    grabNowWeatherAndRender();
    grabForecastAndRender();
}


function grabNowWeatherAndRender() {
    var request = new XMLHttpRequest();
    request.open('GET', currentWeatherEndpoint);
    request.setRequestHeader("Access-Control-Allow-Origin", "https://karimo94.github.io/weather-d37/weather.html");
    request.setRequestHeader("Access-Control-Allow-Headers", "*");
    request.setRequestHeader('Access-Control-Allow-Credentials', true);
    request.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    request.onload = function() {

        var jsonData = JSON.parse(this.response);
        currentWeatherData = jsonData;

        //temp
        tempNowElement.innerHTML = kelvinToCelsius(currentWeatherData.main.temp) + '&#176;C';
        //condition
        var condition = currentWeatherData.weather[0].main;
        descNowElement.innerHTML = condition;
        //wind & speed
        var windNow = 'Wind: ' + currentWeatherData.wind.deg + '&#176;';
        windNowElement.innerHTML = windNow;
        speedNowElement.innerHTML = 'Speed: ' + Math.round(currentWeatherData.wind.speed) + 'm/s';
        //humidity
        var humNow = 'Hum: ' + currentWeatherData.main.humidity + '%';
        humNowElement.innerHTML = humNow;
        //icon to render
        iconNowElement.innerHTML = renderConditionIcon(condition);
        //background to render
        var backgroundUrl = backgroundToRender(condition);
        fullCardBody.style.backgroundImage = 'url(' + backgroundUrl + ')';
        fullCardBody.style.backgroundSize = 'cover';
    }

    request.send();
}

function grabForecastAndRender() {
    var request = new XMLHttpRequest();
    request.open('GET', forecastEndpoint);
    request.setRequestHeader("Access-Control-Allow-Origin", "https://karimo94.github.io/weather-d37/weather.html");
    request.setRequestHeader("Access-Control-Allow-Headers", "*");
    request.setRequestHeader('Access-Control-Allow-Credentials', true);
    request.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    var root = $('#sixDay');
    root.empty(); //re-draw
    var card = '';
    request.onload = function() {

        var jsonData = JSON.parse(this.response);
        forecastWeatherData = jsonData;
        /*forecastWeatherData.daily[i].temp.day - temperature
        forecastWeatherData.daily[i].weather[0].main - description */
        /*<div class="col-4">
                <div class="card" id="day1"><h5>icon</h5><h5>temp</h5><h6>desc</h6></div>
        </div>*/

        //render divs with icons at the top, then temp, then description
        for (var i = 1; i < forecastWeatherData.daily.length - 1; i += 1) {
            var temp = kelvinToCelsius(forecastWeatherData.daily[i].temp.day) + '&#176;C';
            var desc = forecastWeatherData.daily[i].weather[0].main;
            var iconToRender = renderConditionIcon(desc);
            var day = dayNumToDayOfWeek(new Date().getDay() + i);
            card = '<div class="col-4"> <div class="card"><p>' + day + '</p><h5>' + iconToRender + '</h5><h5>' +
                temp + '</h5><h6>' + desc + '</h6></div> </div>';
            root.append(card);
        }
    }

    request.send();
}


function kelvinToCelsius(input) {
    return Math.round(input - 273.15);
}

function kelvinToFahr(input) {
    return Math.round((input - 273.15) * (9 / 5) + 32);
}

function renderConditionIcon(condition) {
    //icon to render
    if (condition === 'Clear' || condition === 'Sunny') {
        return sun;
    }
    if (condition === 'Smoke' || condition === 'Fog' || condition === 'Mist') {
        return fog;
    }
    if (condition === 'Clouds' || condition === 'Overcast') {
        return overcast;
    }
    if (condition === 'Rain' || condition === 'Showers') {
        return rain;
    } else {
        return snows;
    }
}

function dayNumToDayOfWeek(value) {
    let day = '';
    //reset
    if (value > 6) {
        value -= 6;
    }
    switch (value) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }
    return day;
}

function backgroundToRender(condition) {
    //icon to render
    if (condition === 'Clear' || condition === 'Sunny') {
        return background_sun;
    }
    if (condition === 'Smoke' || condition === 'Fog' || condition === 'Mist') {
        return background_clouds;
    }
    if (condition === 'Clouds' || condition === 'Overcast') {
        return background_clouds;
    }
    if (condition === 'Rain' || condition === 'Showers') {
        return background_rain;
    } else {
        return background_snow;
    }
}