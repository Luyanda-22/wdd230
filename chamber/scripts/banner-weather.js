//banner/////////////////////////////////////////

 // Get the close button and the banner
 const closeButton = document.getElementById('closeBanner');
 const banner = document.getElementById('banner');

 // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 const currentDayOfWeek = new Date().getDay();

 // Array to hold the days the banner should appear (Monday, Tuesday, Wednesday)
 const daysToShowBanner = [1, 2, 3]; // Monday, Tuesday, Wednesday

 // Check if the current day is in the array of days to show the banner
 if (daysToShowBanner.includes(currentDayOfWeek)) {
     banner.style.display = 'block'; // Show the banner
 }

 // Add event listener to the close button
 closeButton.addEventListener('click', function() {
     banner.style.display = 'none'; // Hide the banner when the close button is clicked
 });

 //weather//////////////////////////////////////////////

 // Function to fetch weather data from OpenWeatherMap API
 async function fetchWeather() {
    const apiKey = '04e728cc5f719798f6badd544a8c9295'; // Replace 'YOUR_API_KEY' with your actual API key
    const chamberLocation = 'Johannesburg'; // Replace 'ChamberLocation' with your chamber location

    try {
        // Fetch current weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        // Update HTML with current weather data
        document.getElementById('temperature').textContent = data.main.temp + ' °C';
        document.getElementById('description').textContent = data.weather[0].description;

        // Fetch three-day forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();

        // Extract and display forecast for the next three days
        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = ''; // Clear previous forecast data

        for (let i = 0; i < 3; i++) {
            const forecast = forecastData.list[i * 8]; // Data for every 24 hours (3-hour interval, so 8th element gives data for the next day)
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

// Call the fetchWeather function when the page loads
window.onload = fetchWeather;