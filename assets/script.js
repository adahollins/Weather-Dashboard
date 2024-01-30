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
            var todayDate = dayjs().format('DD/MM/YYYY');
            var todayTitle = $("<h3>").text(cityName +  " " + todayDate);
            todayHTML.append(todayTitle);

            var todayWeather = data.list[0].weather[0].main;
            var todayWeatherTitle = $("<h4>").text(todayWeather);
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
            todayHTML.addClass('edit-border');

            //The weather for the next 5 days
            //Day One
            var dayOneDiv = $("<div id='day-one' class='5-day col-3 bg-dark text-white'>");

            var dayOneDate = dayjs().add(1, 'd').format('DD/MM/YYYY');
            var dayOneTitle = $("<h4>").text(dayOneDate);
            dayOneDiv.append(dayOneTitle);

            var dayOneWeather = data.list[7].weather[0].main;
            var dayOneWeatherTitle = $("<h5>").text(dayOneWeather);
            dayOneDiv.append(dayOneWeatherTitle);

            var dayOneTemp = data.list[7].main.temp;
            var dayOneTempP = $("<p>").text("Temp: " + dayOneTemp + "°C");
            var dayOneWind = data.list[7].wind.speed;
            var dayOneWindP = $("<p>").text("Wind: " + dayOneWind + " km/h");
            var dayOneHumidity = data.list[7].main.humidity;
            var dayOneHumidityP = $("<p>").text("Humidity: " + dayOneHumidity + "%");
            dayOneDiv.append(dayOneTempP);
            dayOneDiv.append(dayOneWindP);
            dayOneDiv.append(dayOneHumidityP);
            forecastHTML.append(dayOneDiv);

            //Day Two
            var dayTwoDiv = $("<div id='day-two' class='5-day col-3 bg-dark text-white'>");

            var dayTwoDate = dayjs().add(2, 'd').format('DD/MM/YYYY');
            var dayTwoTitle = $("<h4>").text(dayTwoDate);
            dayTwoDiv.append(dayTwoTitle);

            var dayTwoWeather = data.list[14].weather[0].main;
            var dayTwoWeatherTitle = $("<h5>").text(dayTwoWeather);
            dayTwoDiv.append(dayTwoWeatherTitle);

            var dayTwoTemp = data.list[14].main.temp;
            var dayTwoTempP = $("<p>").text("Temp: " + dayTwoTemp + "°C");
            var dayTwoWind = data.list[14].wind.speed;
            var dayTwoWindP = $("<p>").text("Wind: " + dayTwoWind + " km/h");
            var dayTwoHumidity = data.list[14].main.humidity;
            var dayTwoHumidityP = $("<p>").text("Humidity: " + dayTwoHumidity + "%");
            dayTwoDiv.append(dayTwoTempP);
            dayTwoDiv.append(dayTwoWindP);
            dayTwoDiv.append(dayTwoHumidityP);
            forecastHTML.append(dayTwoDiv);

            //Day Three
            var dayThreeDiv = $("<div id='day-thre' class='5-day col-3 bg-dark text-white'>");

            var dayThreeDate = dayjs().add(3, 'd').format('DD/MM/YYYY');
            var dayThreeTitle = $("<h4>").text(dayThreeDate);
            dayThreeDiv.append(dayThreeTitle);

            var dayThreeWeather = data.list[21].weather[0].main;
            var dayThreeWeatherTitle = $("<h5>").text(dayThreeWeather);
            dayThreeDiv.append(dayThreeWeatherTitle);

            var dayThreeTemp = data.list[21].main.temp;
            var dayThreeTempP = $("<p>").text("Temp: " + dayThreeTemp + "°C");
            var dayThreeWind = data.list[21].wind.speed;
            var dayThreeWindP = $("<p>").text("Wind: " + dayThreeWind + " km/h");
            var dayThreeHumidity = data.list[21].main.humidity;
            var dayThreeHumidityP = $("<p>").text("Humidity: " + dayThreeHumidity + "%");
            dayThreeDiv.append(dayThreeTempP);
            dayThreeDiv.append(dayThreeWindP);
            dayThreeDiv.append(dayThreeHumidityP);
            forecastHTML.append(dayThreeDiv);

            //Day Four
            var dayFourDiv = $("<div id='day-four' class='5-day col-3 bg-dark text-white'>");

            var dayFourDate = dayjs().add(4, 'd').format('DD/MM/YYYY');
            var dayFourTitle = $("<h4>").text(dayFourDate);
            dayFourDiv.append(dayFourTitle);

            var dayFourWeather = data.list[28].weather[0].main;
            var dayFourWeatherTitle = $("<h5>").text(dayFourWeather);
            dayFourDiv.append(dayFourWeatherTitle);

            var dayFourTemp = data.list[28].main.temp;
            var dayFourTempP = $("<p>").text("Temp: " + dayFourTemp + "°C");
            var dayFourWind = data.list[28].wind.speed;
            var dayFourWindP = $("<p>").text("Wind: " + dayFourWind + " km/h");
            var dayFourHumidity = data.list[28].main.humidity;
            var dayFourHumidityP = $("<p>").text("Humidity: " + dayFourHumidity + "%");
            dayFourDiv.append(dayFourTempP);
            dayFourDiv.append(dayFourWindP);
            dayFourDiv.append(dayFourHumidityP);
            forecastHTML.append(dayFourDiv);

            //Day Five
            var dayFiveDiv = $("<div id='day-five' class='5-day col-3 bg-dark text-white'>");

            var dayFiveDate = dayjs().add(5, 'd').format('DD/MM/YYYY');
            var dayFiveTitle = $("<h4>").text(dayFiveDate);
            dayFiveDiv.append(dayFiveTitle);

            var dayFiveWeather = data.list[35].weather[0].main;
            var dayFiveWeatherTitle = $("<h5>").text(dayFiveWeather);
            dayFiveDiv.append(dayFiveWeatherTitle);

            var dayFiveTemp = data.list[35].main.temp;
            var dayFiveTempP = $("<p>").text("Temp: " + dayFiveTemp + "°C");
            var dayFiveWind = data.list[35].wind.speed;
            var dayFiveWindP = $("<p>").text("Wind: " + dayFiveWind + " km/h");
            var dayFiveHumidity = data.list[35].main.humidity;
            var dayFiveHumidityP = $("<p>").text("Humidity: " + dayFiveHumidity + "%");
            dayFiveDiv.append(dayFiveTempP);
            dayFiveDiv.append(dayFiveWindP);
            dayFiveDiv.append(dayFiveHumidityP);
            forecastHTML.append(dayFiveDiv);
        });
        });


});
});