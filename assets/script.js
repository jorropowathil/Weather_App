
// varibles
var formBtn= document.querySelector('.formBtn');
var form= document.querySelector('.form-control');


// APIs Variables
var coordinateUrlStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallFirst = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var oneCallAddition = '&lon=';
var oneCallLat='';
var oneCallLong='';
var citySearch = 'glenview';

// API KEY Var & Search variables
var apiKey= '&appid=7f3ae1b6bcf96fd759ef4aacda6a20d5';
// var apiOneCallSearch= oneCallFirst+ oneCallLat + oneCallAddition +oneCallLong + apiKey;



// Event listener button
formBtn.addEventListener('click', function() {
    var searchedFor= document.querySelector('.searchedFor').value;
    var apiCitySearch= coordinateUrlStart + citySearch + apiKey;
    fetch(apiCitySearch, {})
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        var unorderList_currentCity = document.createElement("LI");
        var unorderList_currentTem = document.createElement("LI");
        var unorderList_currentWind = document.createElement("LI");
        var unorderList_currentHumidity = document.createElement("LI");
        var currentCity= (data.name);
        var currentTemp =(data.main.temp);
        var currentWindSpeed= (data.wind.speed)
        var currentHumidityPercent= (data.main.humidity)
        // City Stuff
        document.getElementById("topList").appendChild(unorderList_currentCity);
        unorderList_currentCity.innerHTML = currentCity + moment().format(" MMM Do YY");
        // Temp Stuff
        document.getElementById("topList").appendChild(unorderList_currentTem);
        unorderList_currentTem.innerHTML = currentTemp + " change to F";

        // Wind Stuff
        document.getElementById("topList").appendChild(unorderList_currentWind);
        unorderList_currentWind.innerHTML = currentWindSpeed + " mph";

        // Humidity
        document.getElementById("topList").appendChild(unorderList_currentHumidity);
        unorderList_currentHumidity.innerHTML = currentHumidityPercent + " %";

        // unorderList_1.appendChild(data.weather[0].description);
        console.log(apiCitySearch)
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.wind.speed)
        console.log(data.main.humidity)
        // (X − 273.15) × 9/5 + 32 (Kelvin to F equation)
        // console.log(data.weather[0].description)
        // data.weather[0].description
    })
})

function getWeather (data){
}



// var city = document.createTextNode("data.weather[0].description");
// console.log(city)