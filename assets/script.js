
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
        // var unorderList_1 = document.createElement("LI");
       
        console.log(apiCitySearch)
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.wind.speed)
        console.log(data.main.humidity)
        // (X − 273.15) × 9/5 + 32 (Kelvin to F equation)
        // console.log(data.weather[0].description)
        // data.weather[0].description

        // unorderList_1.appendChild(data.weather[0].description);
        // document.getElementById("topList").appendChild(unorderList_1);
    })
})

function getWeather (data){
}



// var city = document.createTextNode("data.weather[0].description");
// console.log(city)