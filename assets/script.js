$(document).ready(function () {
    // https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}
    
    var apiKey = WEATHER_KEY;

    var searchString = "";

    var todayHTML = $("#today");
    var forecastHTML = $("#forecast");

// Convert lat and lon to location

$("#search-button").on("click", function(event) {
    event.preventDefault();

    $("#today").empty();
    searchString = $("#search-input").val();
    queryURLConverter = ("https://api.openweathermap.org/data/2.5/weather?q=" + searchString + "&limit=1&appid=" + apiKey);


    fetch(queryURLConverter)
        .then(function (response) {
        return response.json();
        })
    .then(function (geo) {
        var lat = geo.coord.lat;
        var lon = geo.coord.lon;

        var queryURLWeather = ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +"&limit=1&appid=" + apiKey + "&units=metric");

        fetch(queryURLWeather)
            .then(function  (response) {
            return response.json();
            })
        .then(function (data) {

            var cityName = data.city.name;

            $("#today").text(cityName);
        });
        });


});
});