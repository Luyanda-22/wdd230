document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const copyrightSpan = document.getElementById('copyright');
    const lastModifiedSpan = document.getElementById('lastModified');

    // Updates copyright year
    copyrightSpan.textContent = currentYear;

    // Updates last modified date
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModifiedSpan.textContent = lastModified.toLocaleDateString('en-US', options);
});

//Weather infomation//

const apiKey = '04e728cc5f719798f6badd544a8c9295';

// Function to fetch weather data from the API
async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.weather.com/data?apikey=${apiKey}`);
        const data = await response.json();
        return data; // Returns the JSON data
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to populate weather information in the HTML
async function populateWeatherInfo() {
    const weatherInfoElement = document.getElementById('weather-info');
    const weatherData = await fetchWeatherData();

    if (weatherData) {
        const { location, temperature, condition } = weatherData;
        weatherInfoElement.innerHTML = `
            <p>Location: ${location}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${condition}</p>
        `;
    } else {
        // Handle error or display a message if weather data is not available
        weatherInfoElement.innerHTML = '<p>Weather data unavailable</p>';
    }
}

// Call function to populate weather information when the page loads
window.onload = populateWeatherInfo;

//Rentals page//

window.addEventListener('scroll', function() {
    const bookNowBtn = document.getElementById('book-now-btn');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        bookNowBtn.style.display = 'block';
    } else {
        bookNowBtn.style.display = 'none';
    }
});

// Function to fetch JSON data from file
async function fetchRentalsData() {
    try {
        const response = await fetch('data/prices.json'); // Replace 'rentals.json' with the path to your JSON file
        const data = await response.json();
        return data; // Return the JSON data
    } catch (error) {
        console.error('Error fetching rentals data:', error);
    }
}

// Function to populate rentals on the page
async function populateRentals() {
    const rentalsContainer = document.getElementById('rentals-container');
    const rentalsData = await fetchRentalsData(); // Fetch JSON data

    if (rentalsData) {
        // Loop through each rental item in the JSON data
        rentalsData.forEach(function(rental) {
            // Create elements for rental item
            const rentalDiv = document.createElement('div');
            rentalDiv.classList.add('rental');

            const image = document.createElement('img');
            image.src = rental.imageURL;
            image.alt = rental.name;

            const rentalDetails = document.createElement('div');
            rentalDetails.classList.add('rental-details');

            const rentalName = document.createElement('h3');
            rentalName.textContent = rental.name;

            const rentalType = document.createElement('p');
            rentalType.textContent = `Type: ${rental.type}`;

            const maxPersons = document.createElement('p');
            maxPersons.textContent = `Max. Persons: ${rental.maxPersons}`;

            const halfDayReservation = document.createElement('p');
            halfDayReservation.textContent = `Half Day Reservation: ${rental.halfDayReservation}`;

            const fullDayReservation = document.createElement('p');
            fullDayReservation.textContent = `Full Day Reservation: ${rental.fullDayReservation}`;

            const halfDayWalkIn = document.createElement('p');
            halfDayWalkIn.textContent = `Half Day Walk-In: ${rental.halfDayWalkIn}`;

            const fullDayWalkIn = document.createElement('p');
            fullDayWalkIn.textContent = `Full Day Walk-In: ${rental.fullDayWalkIn}`;

            // Append elements to rentalDiv
            rentalDiv.appendChild(image);
            rentalDetails.appendChild(rentalName);
            rentalDetails.appendChild(rentalType);
            rentalDetails.appendChild(maxPersons);
            rentalDetails.appendChild(halfDayReservation);
            rentalDetails.appendChild(fullDayReservation);
            rentalDetails.appendChild(halfDayWalkIn);
            rentalDetails.appendChild(fullDayWalkIn);
            rentalDiv.appendChild(rentalDetails);

            // Append rentalDiv to rentalsContainer
            rentalsContainer.appendChild(rentalDiv);
        });
    } else {
        // Handle error or display a message if JSON data is not available
        rentalsContainer.innerHTML = '<p>Error fetching rentals data</p>';
    }
}

// Call populateRentals function when the page loads
window.onload = populateRentals;

//submit button/////////////////////////

 // Function to redirect to the home page
 function redirectToHomePage() {
    window.location.href = "index.html"; 
}

// Function to handle form submission and redirect
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Redirect to the home page
    redirectToHomePage();
}

// Attach handleSubmit function to all submit buttons in forms
var submitButtons = document.querySelectorAll('form button[type="submit"]');
submitButtons.forEach(function(button) {
    button.addEventListener('click', handleSubmit);
});
