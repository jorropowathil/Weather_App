// varibles
var formBtn= document.querySelector('.formBtn');
var form= document.querySelector('.form-control');

// APIs Variables
var coordinateUrlStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallFirst = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var oneCallAddition = '&lon=';
var oneCallEnd= '&exclude=hourly,alerts&units=imperial'



var unorderList_currentCity = document.createElement("LI");
var unorderList_currentTem = document.createElement("LI");
var unorderList_currentWind = document.createElement("LI");
var unorderList_currentHumidity = document.createElement("LI");


// API KEY Var & Search variables
var apiKey= '&appid=7f3ae1b6bcf96fd759ef4aacda6a20d5';


// Forecast
var day1Temp= document.querySelector(".day1Temp");
// day1Temp.textcontent= "Temp: " + 
// Resource: 


// Event listener button
formBtn.addEventListener('click', function() {
    event.preventDefault();
    var citySearch = document.getElementById("formGroupExampleInput").value;
    console.log (citySearch)
    var searchedFor= document.querySelector('.searchedFor').value;
    var apiCitySearch= coordinateUrlStart + citySearch + apiKey;

  
    
    fetch(apiCitySearch, {})
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        // City Stuff
        var currentCity= (data.name);
        document.getElementById("topList").appendChild(unorderList_currentCity);
        unorderList_currentCity.innerHTML = currentCity + "," + moment().format(" MMM Do, YY");
        // Temp Stuff
        var currentTemp =(data.main.temp);
        document.getElementById("topList").appendChild(unorderList_currentTem);
        unorderList_currentTem.innerHTML = "Temperature: " + Math.round((currentTemp  - 273.15) * 9/5 + 32) * 1 + " F";

        // Wind Stuff
        var currentWindSpeed= (data.wind.speed)
        document.getElementById("topList").appendChild(unorderList_currentWind);
        unorderList_currentWind.innerHTML = "Wind Speed: " + currentWindSpeed + " mph";

        // Humidity
        var currentHumidityPercent= (data.main.humidity)
        document.getElementById("topList").appendChild(unorderList_currentHumidity);
        unorderList_currentHumidity.innerHTML = "Humidity: " + currentHumidityPercent + " %";

        console.log(apiCitySearch)
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.wind.speed)
        console.log(data.main.humidity)
        console.log(data.coord.lat)
        console.log(data.coord.lon)

        // One Call API
          // Onecall (test)
    var apiOneCallSearch= oneCallFirst+ data.coord.lat + oneCallAddition + data.coord.lon + oneCallEnd + apiKey;
    console.log(apiOneCallSearch)

    fetch(apiOneCallSearch, {})
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data)
        // UV Index Stuff
        console.log(data.current.uvi)
        var unorderList_currentUVI = document.createElement("LI");
        var currentUVI= (data.current.uvi)
        document.getElementById("topList").appendChild(unorderList_currentUVI);
        unorderList_currentUVI.innerHTML = "UV Index: " + currentUVI;
        // Five day Forecast
        // Temperature
        for (let i = 1; i < 6; i++) {
            var forecastTemp= (data.daily[i].temp.day);
            console.log(forecastTemp)
        }
        // Wind
        for (let i = 1; i < 6; i++) {
            var forecastWind= (data.daily[i].wind_speed);
            console.log(forecastWind)
        }
        // Humidity
        for (let i = 1; i < 6; i++) {
            var forecastHumidity= (data.daily[i].humidity);
            console.log(forecastHumidity)
        }
        
    })
        
    })
    
})





function getUV(coord) {
    lat = coord.coord.lat.toString();
    lon = coord.coord.lon.toString();
    var apiOneCallSearch= oneCallFirst+ oneCallLat + oneCallAddition +oneCallLong + apiKey;
    fetch(apiOneCallSearch, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
    }
console.log (getUV)