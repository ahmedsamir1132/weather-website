/* day 1 */

var search = document.getElementById("search");
var city = document.getElementById("location");
var temperature = document.getElementById("temp");
var icon = document.getElementById("icon");
var description = document.getElementById("desc");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind");
var weatherCondition;


async function getweatherApi() {
    var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=77a00e86a84742b0b6c224428211109&q=Cairo&days=3`);
    weatherCondition = await response.json();
}

function weatherDisplay() {
    city.innerHTML = `Today <br> Weather at: ` + weatherCondition.location.name;
    temperature.innerHTML = weatherCondition.current.temp_c + `°C`;
    icon.setAttribute("src", weatherCondition.current.condition.icon);
    description.innerHTML = weatherCondition.current.condition.text;
    humidity.innerHTML = `Humidity: ` + weatherCondition.current.humidity + `%`;
    windSpeed.innerHTML = `Wind: ` + weatherCondition.current.wind_kph + ` kph`;
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${weatherCondition.location.name})`
}

async function getAllweather() {
    if (search.value == "") {
        await getweatherApi();
        weatherDisplay();
        weatherDisplay2();
        weatherDisplay3();
    }
    else {
        search.onkeyup = async function () {
            var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=77a00e86a84742b0b6c224428211109&q=${search.value}&days=3`);
            weatherCondition = await response.json();
            weatherDisplay();
            weatherDisplay2();
            weatherDisplay3();
        }
    }
}

getAllweather();
addEventListener("keyup", getAllweather);

/* End of day 1 */

/* day 2 */

var day2 = document.getElementById("day-2");
var temperature2 = document.getElementById("temp-2");
var icon2 = document.getElementById("icon-2");
var description2 = document.getElementById("desc-2");
var humidity2 = document.getElementById("humidity-2");
var windSpeed2 = document.getElementById("wind-2");

function weatherDisplay2() {
    day2.innerHTML = `Tomorrow: <br>` + weatherCondition.forecast.forecastday[1].date;
    temperature2.innerHTML = weatherCondition.forecast.forecastday[1].day.avgtemp_c + `°C`;
    icon2.setAttribute("src", weatherCondition.forecast.forecastday[1].day.condition.icon);
    description2.innerHTML = weatherCondition.forecast.forecastday[1].day.condition.text;
    humidity2.innerHTML = `Humidity: ` + weatherCondition.forecast.forecastday[1].day.avghumidity + `%`;
    windSpeed2.innerHTML = `Wind: ` + weatherCondition.forecast.forecastday[1].day.maxwind_kph + ` kph`;
}

/* End of day 2 */

/* day 3 */

var day3 = document.getElementById("day-3");
var temperature3 = document.getElementById("temp-3");
var icon3 = document.getElementById("icon-3");
var description3 = document.getElementById("desc-3");
var humidity3 = document.getElementById("humidity-3");
var windSpeed3 = document.getElementById("wind-3");

function weatherDisplay3() {
    day3.innerHTML = `After tomorrow: <br>` + weatherCondition.forecast.forecastday[2].date;
    temperature3.innerHTML = weatherCondition.forecast.forecastday[2].day.avgtemp_c + `°C`;
    icon3.setAttribute("src", weatherCondition.forecast.forecastday[2].day.condition.icon);
    description3.innerHTML = weatherCondition.forecast.forecastday[2].day.condition.text;
    humidity3.innerHTML = `Humidity: ` + weatherCondition.forecast.forecastday[2].day.avghumidity + `%`;
    windSpeed3.innerHTML = `Wind: ` + weatherCondition.forecast.forecastday[2].day.maxwind_kph + ` kph`;
}

/* End of day 3 */