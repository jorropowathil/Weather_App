// varibles
var formBtn= document.querySelector('.formBtn');
var form= document.querySelector('.form-control');

// APIs Variables
var coordinateUrlStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallFirst = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var oneCallAddition = '&lon=';
var oneCallEnd= '&exclude=hourly,alerts&units=imperial';
var citySearch;
// document.querySelector('.formGroupExampleInput');
//document.getElementById("formGroupExampleInput");

// Top Card
var unorderList_currentCity = document.createElement("LI");
var unorderList_currentTem = document.createElement("LI");
var unorderList_currentWind = document.createElement("LI");
var unorderList_currentHumidity = document.createElement("LI");
var unorderList_currentUVI = document.createElement("LI");

// API KEY Var & Search variables
var apiKey= '&appid=7f3ae1b6bcf96fd759ef4aacda6a20d5';
// One Call API
var apiOneCallSearch; 

// Forecast
// Dates
var day1Date= document.querySelector(".day1Date");
var day2Date= document.querySelector(".day2Date");
var day3Date= document.querySelector(".day3Date");
var day4Date= document.querySelector(".day4Date");
var day5Date= document.querySelector(".day5Date");
// Temp
var day1Temp= document.querySelector(".day1Temp");
var day2Temp= document.querySelector(".day2Temp");
var day3Temp= document.querySelector(".day3Temp");
var day4Temp= document.querySelector(".day4Temp");
var day5Temp= document.querySelector(".day5Temp");
// Wind
var day1Wind= document.querySelector(".day1Wind");
var day2Wind= document.querySelector(".day2Wind");
var day3Wind= document.querySelector(".day3Wind");
var day4Wind= document.querySelector(".day4Wind");
var day5Wind= document.querySelector(".day5Wind");
// Humidity
var day1Humidity= document.querySelector(".day1Humidity");
var day2Humidity= document.querySelector(".day2Humidity");
var day3Humidity= document.querySelector(".day3Humidity");
var day4Humidity= document.querySelector(".day4Humidity");
var day5Humidity= document.querySelector(".day5Humidity");

// Event listener button
formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    getWeather();
});

function getWeather(){
    citySearch = document.querySelector('#formGroupExampleInput').value;
    var apiCitySearch= coordinateUrlStart + citySearch + apiKey;
    fetch(apiCitySearch, {})
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        topCard(data);
    })
}

function topCard (data){
    // City Stuff
    document.getElementById("topList").appendChild(unorderList_currentCity);
    unorderList_currentCity.innerHTML = data.name + "," + moment().format(" MMM Do, YY");
    // Temp Stuff
    document.getElementById("topList").appendChild(unorderList_currentTem);
    unorderList_currentTem.innerHTML = "Temperature: " + Math.round((data.main.temp  - 273.15) * 9/5 + 32) * 1 + " F";
    // Wind Stuff
    document.getElementById("topList").appendChild(unorderList_currentWind);
    unorderList_currentWind.innerHTML = "Wind Speed: " + data.wind.speed + " mph";
    // Humidity
    document.getElementById("topList").appendChild(unorderList_currentHumidity);
    unorderList_currentHumidity.innerHTML = "Humidity: " + data.main.humidity + " %";
    apiOneCallSearch = oneCallFirst+ data.coord.lat + oneCallAddition + data.coord.lon + oneCallEnd + apiKey;
    getOneSearch(data);
}

function getOneSearch (data){
    fetch (apiOneCallSearch, {})
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        document.getElementById("topList").appendChild(unorderList_currentUVI);
        unorderList_currentUVI.innerHTML = "UV Index: " + data.current.uvi;
        getForecast(data);
    })
}

function getForecast(data) {
    // Dates
        day1Date.textContent = moment().add(1, 'days').format('MMM Do');
        day2Date.textContent = moment().add(2, 'days').format('MMM Do');
        day3Date.textContent = moment().add(3, 'days').format('MMM Do');
        day4Date.textContent = moment().add(4, 'days').format('MMM Do');
        day5Date.textContent = moment().add(5, 'days').format('MMM Do');

    // Temp Forecast
        var day1ForecastTemp= (data.daily[0].temp.day);
        var day2ForecastTemp= (data.daily[1].temp.day);
        var day3ForecastTemp= (data.daily[2].temp.day);
        var day4ForecastTemp= (data.daily[3].temp.day);
        var day5ForecastTemp= (data.daily[4].temp.day);
        day1Temp.textContent = 'Temp: ' + day1ForecastTemp;
        day2Temp.textContent = 'Temp: ' + day2ForecastTemp;
        day3Temp.textContent = 'Temp: ' + day3ForecastTemp;
        day4Temp.textContent = 'Temp: ' + day4ForecastTemp;
        day5Temp.textContent = 'Temp: ' + day5ForecastTemp;

        // Wind Forecast
        var day1forecastWind= (data.daily[0].wind_speed);
        var day2forecastWind= (data.daily[1].wind_speed);
        var day3forecastWind= (data.daily[2].wind_speed);
        var day4forecastWind= (data.daily[3].wind_speed);
        var day5forecastWind= (data.daily[4].wind_speed);
        day1Wind.textContent = 'Wind Speed: ' + day1forecastWind + ' mph';
        day2Wind.textContent = 'Wind Speed: ' + day2forecastWind + ' mph';
        day3Wind.textContent = 'Wind Speed: ' + day3forecastWind + ' mph';
        day4Wind.textContent = 'Wind Speed: ' + day4forecastWind + ' mph';
        day5Wind.textContent = 'Wind Speed: ' + day5forecastWind + ' mph';

        // Humidity Forecast
        var day1ForecastHumidity= (data.daily[0].wind_speed);
        var day2ForecastHumidity= (data.daily[1].wind_speed);
        var day3ForecastHumidity= (data.daily[2].wind_speed);
        var day4ForecastHumidity= (data.daily[3].wind_speed);
        var day5ForecastHumidity= (data.daily[4].wind_speed);
        day1Humidity.textContent = ' Humidity: ' + day1ForecastHumidity + '%';
        day2Humidity.textContent = ' Humidity: ' + day2ForecastHumidity + '%';
        day3Humidity.textContent = ' Humidity: ' + day3ForecastHumidity + '%';
        day4Humidity.textContent = ' Humidity: ' + day4ForecastHumidity + '%';
        day5Humidity.textContent = ' Humidity: ' + day5ForecastHumidity + '%';
}