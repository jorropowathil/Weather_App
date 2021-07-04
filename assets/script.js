
// varibles
var formBtn= document.querySelector('.formBtn');
var form= document.querySelector('.form-control');


// APIs Variables
var coordinateUrlStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallFirst = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var oneCallAddition = '&lon=';
var oneCallLat='';
var oneCallLong='';
var citySearch = '';

// API KEY Var & Search variables
var apiKey= '&appid=7f3ae1b6bcf96fd759ef4aacda6a20d5';
var apiCitySearch= coordinateUrlStart + citySearch + apiKey;
var apiOneCallSearch= oneCallFirst+ oneCallLat + oneCallAddition +oneCallLong + apiKey;


// Event listener button
formBtn.addEventListener('click', function(event) {
    console.log ('hello');
}
)




// searchBtn.addEventListener('click', function (event) {
//     searchedCity = document.querySelector('.search-form').value;
//     var api = getCoordStart + searchedCity + apiKey;
//     fetch(api, {})
//         .then(function (response) {
//             return response.json();
//         })