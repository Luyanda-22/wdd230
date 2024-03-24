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

// Weather//////////////////////////////////////////////////////////////////

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '04e728cc5f719798f6badd544a8c9295';
const city = 'Johannesburg'; // Replace with your desired city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Function to fetch weather data
function fetchWeather() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        updateWeatherCard(data);
    })
    .catch(error => {
        console.log(error);
    });
}

// Function to update the weather card with fetched data
function updateWeatherCard(data) {
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `${data.main.temp} °C`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weather-icon').src = iconUrl;
}

// Fetch weather when the script loads
document.addEventListener('DOMContentLoaded', fetchWeather);