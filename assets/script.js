$(document).ready(function () {
    // https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}
    
    var apiKey = WEATHER_KEY;

    var searchString = "";

    var todayHTML = $("#today");
    var forecastHTML = $("#forecast");


$("#search-button").on("click", function(event) {
    event.preventDefault();

    $("#today").empty();
    searchString = $("#search-input").val();
    queryURLConverter = ("https://api.openweathermap.org/data/2.5/weather?q=" + searchString + "&limit=1&appid=" + apiKey);

// Convert city name to lon and lat
    fetch(queryURLConverter)
        .then(function (response) {
        return response.json();
        })
    .then(function (geo) {
        var lat = geo.coord.lat;
        var lon = geo.coord.lon;

        var queryURLWeather = ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +"&limit=1&appid=" + apiKey + "&units=metric");

// Use lon and lat to show weather
        fetch(queryURLWeather)
            .then(function  (response) {
            return response.json();
            })
        .then(function (data) {

            //Today's Weather
            var cityName = data.city.name;
            var todayDate = data.list[0].dt_txt;
            var todayTitle = $("<h1>").text(cityName +  " " + todayDate);
            todayHTML.append(todayTitle);

            var todayWeather = data.list[0].weather[0].main;
            var todayWeatherTitle = $("<h3>").text(todayWeather);
            todayHTML.append(todayWeatherTitle);

            var todayTemp = data.list[0].main.temp;
            var todayTempP = $("<p>").text("Temp: " + todayTemp + "°C");
            var todayWind = data.list[0].wind.speed;
            var todayWindP = $("<p>").text("Wind: " + todayWind + " km/h");
            var todayHumidity = data.list[0].main.humidity;
            var todayHumidityP = $("<p>").text("Humidity: " + todayHumidity + "%");
            todayHTML.append(todayTempP);
            todayHTML.append(todayWindP);
            todayHTML.append(todayHumidityP);

            //The weather for the next 5 days
            //Day One
            var dayOneDate = data.list[0].dt_txt;
            var dayOneTitle = $("<h1>").text(cityName +  " " + dayOneDate);
            todayHTML.append(dayOneTitle);

            var dayOneWeather = data.list[0].weather[0].main;
            var dayOneWeatherTitle = $("<h3>").text(dayOneWeather);
            todayHTML.append(dayOneWeatherTitle);

            var dayOneTemp = data.list[0].main.temp;
            var dayOneTempP = $("<p>").text("Temp: " + dayOneTemp + "°C");
            var dayOneyWind = data.list[0].wind.speed;
            var dayOneWindP = $("<p>").text("Wind: " + dayOneWind + " km/h");
            var dayOneHumidity = data.list[0].main.humidity;
            var dayOneHumidityP = $("<p>").text("Humidity: " + dayOneHumidity + "%");
            todayHTML.append(dayOneTempP);
            todayHTML.append(dayOneWindP);
            todayHTML.append(dayOneHumidityP);
        });
        });


});
});