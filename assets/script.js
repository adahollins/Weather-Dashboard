$(document).ready(function () {
    // https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}
    
    var apiKey = config.WEATHER_KEY;
    var queryURLWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +"&appid=" + apiKey;
    var queryURLConverter = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + apiKey;

    var lat = queryURLConverter;
    var lon = queryURLConverter;

    var searchString = "";

    var cityName = "";

    var todayHTML = $("#today");
    var forecastHTML = $("#forecast");


});