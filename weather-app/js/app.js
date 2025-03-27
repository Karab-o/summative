const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherDataDiv = document.getElementById("weather-data");

searchBtn.addEventListener("click", fetchWeather);

async function fetchWeather() {
	    const city = cityInput.value.trim();
	    
	    if (!city) {
		            showError("Please enter a city name");
		            return;
		        }

	    try {
		            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
		            const data = await response.json();

		            if (data.cod === "404") {
				                showError("City not found");
				                return;
				            }

		            displayWeather(data);
		        } catch (error) {
				        showError("Failed to fetch weather data");
				    }
}

function displayWeather(data) {
	    const { name, main, weather } = data;
	    weatherDataDiv.innerHTML = `
	            <div class="weather-card">
		                <h2>${name}</h2>
				            <p>Temperature: ${main.temp}°C</p>
					                <p>Feels like: ${main.feels_like}°C</p>
							            <p>Weather: ${weather[0].description}</p>
								                <p>Humidity: ${main.humidity}%</p>
										        </div>
											    `;
}

function showError(message) {
	    weatherDataDiv.innerHTML = `<p class="error">${message}</p>`;
}
