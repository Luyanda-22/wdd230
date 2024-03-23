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

const apiKey = '04e728cc5f719798f6badd544a8c9295'; 
const city = 'Johannesburg'; 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

function fetchWeatherAndForecast() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        updateWeatherCard(data);
        updateForecast(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function updateWeatherCard(data) {
    const currentWeather = data.list[0];
    document.getElementById('weather-description').textContent = currentWeather.weather[0].description;
    document.getElementById('temperature').textContent = `${currentWeather.main.temp} °C`;
    const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
    document.getElementById('weather-icon').src = iconUrl;
}

function updateForecast(data) {
    // Extracting 12:00 (noon) forecasts for simplicity
    const forecastDays = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));
    
    // Clearing existing forecast
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '';
    
    // Displaying next three days
    for (let i = 0; i < 3; i++) {
        const day = forecastDays[i];
        const date = new Date(day.dt_txt).toDateString();
        const temp = `${day.main.temp} °C`;
        const description = day.weather[0].description;
        
        const forecastHTML = `<div>
                                <p>${date}</p>
                                <p>Temp: ${temp}</p>
                                <p>${description}</p>
                              </div>`;
        forecastDiv.innerHTML += forecastHTML;
    }
}

document.addEventListener('DOMContentLoaded', fetchWeatherAndForecast);


//Banner////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

    // Show the banner on Monday (1), Tuesday (2), and Wednesday (3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('meetGreetBanner').style.display = 'block';
    }
});

function closeBanner() {
    document.getElementById('meetGreetBanner').style.display = 'none';
}