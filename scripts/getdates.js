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