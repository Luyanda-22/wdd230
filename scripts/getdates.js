//Getting the current year
const currentYear = new Date().getFullYear();

//Updating the content of the element with id "copyright"
document.getElementById("copyright").textContent = currentYear;

//Getting the last modified timestamp of the document
const lastModifiedTimestamp = document.lastModified

//Formatting the timestamp as a date
const lastModifiedDate = new Date(lastModifiedTimestamp);

//Formattting the date as a string
const formattedDate = lastModifiedDate.toLocaleString();

//Updatting the content of the element with id "lastModified"
document.getElementById("lastModified").textContent = formattedDate;

//Hamburger menu/////////////////////////////////////////////

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');

       
});

//Page visits/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
	// Retrieving the current visit count from localStorage
	let visitCount = localStorage.getItem("visitCount");

	// If visitCount is null (first visit), set it to 1, otherwise increment it
	visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

	// Updating the visit count in the localStorage
	localStorage.setItem("visitCount", visitCount);

	// Updating the visit count display on the page
	document.getElementById("visit-count").innerText = visitCount;
});

//Wather/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OpenWeatherMap API Key
const apiKey = '04e728cc5f719798f6badd544a8c9295';
// City Name or Location ID 
const city = 'Johannesburg';

// Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
	.then(response => response.json())
	.then(data => {
		const weatherDescription = data.weather[0].description;
		const temperature = data.main.temp;
		const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

		// Update HTML elements with weather data
		document.getElementById('weather-description').textContent = weatherDescription;
		document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
		document.getElementById('weather-icon').src = weatherIcon;
		document.getElementById('weather-icon').alt = weatherDescription;
	})
	.catch(error => console.error('Error fetching weather data:', error));