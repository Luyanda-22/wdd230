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

//Discover page//////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const sidebarContent = document.getElementById("sidebar-content");
    const visitCount = document.getElementById("visit-count");

    // Get the current date
    const currentDate = new Date();
    const currentDateString = currentDate.toDateString();

    // Retrieve the last visit date from localStorage
    const lastVisitDateString = localStorage.getItem("lastVisitDate");

    // Retrieve visit count from localStorage
    let visitCountValue = parseInt(localStorage.getItem("visitCount")) || 0;

    // Increment visit count
    visitCount.textContent = visitCountValue;

    if (lastVisitDateString) {
        const lastVisitDate = new Date(lastVisitDateString);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            sidebarContent.textContent = "Back so soon! Awesome!";
        } else {
            const message = daysDifference === 1 ? "day" : "days";
            sidebarContent.textContent = `You last visited ${daysDifference} ${message} ago.`;
        }
    } else {
        sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDateString);

    // Update visit count in localStorage
    visitCountValue++;
    localStorage.setItem("visitCount", visitCountValue.toString());
});

//Form/////////////////////////////////////////////////////



