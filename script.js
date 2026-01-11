const apiKey = "7028757c9bad3af05888fd99e6e955e4";

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                result.innerHTML = "City not found ❌";
                return;
            }

            result.innerHTML = `
                <p><b>City:</b> ${data.name}</p>
                <p><b>Temperature:</b> ${data.main.temp} °C</p>
                <p><b>Humidity:</b> ${data.main.humidity}%</p>
                <p><b>Weather:</b> ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            result.innerHTML = "Error fetching weather data";
        });
}
