//banner/////////////////////////////////////////

 // Getting the close button and the banner
 const closeButton = document.getElementById('closeBanner');
 const banner = document.getElementById('banner');

 // Getting the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 const currentDayOfWeek = new Date().getDay();

 // Array to hold the days the banner should appear (Monday, Tuesday, Wednesday)
 const daysToShowBanner = [1, 2, 3]; // Monday, Tuesday, Wednesday

 // Checking if the current day is in the array of days to show the banner
 if (daysToShowBanner.includes(currentDayOfWeek)) {
     banner.style.display = 'block'; // Show the banner
 }

 // Adding event listener to the close button
 closeButton.addEventListener('click', function() {
     banner.style.display = 'none'; // Hide the banner when the close button is clicked
 });

 //weather//////////////////////////////////////////////

 // Function to fetch weather data from OpenWeatherMap API
 async function fetchWeather() {
    const apiKey = '04e728cc5f719798f6badd544a8c9295'; 
    const chamberLocation = 'Johannesburg'; 

    try {
        // Fetching current weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        // Updating HTML with current weather data
        document.getElementById('temperature').textContent = data.main.temp + ' °C';
        document.getElementById('description').textContent = data.weather[0].description;

        // Fetching three-day forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();

        // Extracting and displaying forecast for the next three days
        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = ''; 

        for (let i = 0; i < 3; i++) {
            const forecast = forecastData.list[i * 8]; 
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const temperature = forecast.main.temp;
            const description = forecast.weather[0].description;

            const listItem = document.createElement('li');
            listItem.textContent = `${day}: ${temperature} °C, ${description}`;
            forecastList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Calling the fetchWeather function when the page loads
window.onload = fetchWeather;