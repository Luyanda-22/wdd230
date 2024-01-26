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

//Updatting the content of the element wit id "lastModified"
document.getElementById("lastModified").textContent = formattedDate;

//Hamburger menu

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');

       
});