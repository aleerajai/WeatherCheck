const apiKey = "a742553aa6cb79b01fa3e5f8f576c02a";
const weatherData = document.getElementById("weatherData");
const getWeatherBtn = document.getElementById("getWeatherBtn");

getWeatherBtn.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    } else {
        weatherData.innerHTML = "Please enter a city name.";
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            weatherData.innerHTML = error.message;
        });
}

function displayWeather(data) {

weatherData.innerHTML = `
        <b>Weather in ${data.name}, ${data.sys.country}:</b><br>
        <br>
        <b>Temperature:</b> ${data.main.temp} °C<br>
        <b>Feels like:</b> ${data.main.feels_like} °C<br>
      <b>
    `;


}
