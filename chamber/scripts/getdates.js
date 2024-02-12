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

//Hamburger menu///////////////////////////////////////////////////////////////

const hamburger = document.querySelector('#menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamburger.classList.toggle('open');
 
});

//dark/light mode toggle///////////////////////////////////////////////////////

const modeButton = document.querySelector("#mode");
const body = document.body;

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("◉")) {
        body.style.background = "black";
        body.style.color = "white";
		
    } else {
        body.style.background = ""; // Remove background color styling
        body.style.color = "#000";
		

    }

    // Toggle button text content
    modeButton.textContent = modeButton.textContent.includes("◉") ? "◎" : "◉";
});



