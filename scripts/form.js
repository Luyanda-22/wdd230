//Password///////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var passwordInput = document.getElementById("passwrd");
    var confirmPasswordInput = document.getElementById("confirmPasswrd");
    var mismatchError = document.getElementById("passwordMismatch");
    var form = document.getElementById("yourFormId"); // Make sure to replace "yourFormId" with the actual ID of your form

    function checkPasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            mismatchError.style.display = "block";
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        } else {
            mismatchError.style.display = "none";
            confirmPasswordInput.setCustomValidity("");
        }
    }

    function handleFormSubmit(event) {
        checkPasswordMatch(); // Check password match before form submission
        if (form.checkValidity() === false) {
            event.preventDefault(); // Prevent form submission if it's invalid
            return false;
        }
    }

    passwordInput.addEventListener("change", checkPasswordMatch);
    confirmPasswordInput.addEventListener("keyup", checkPasswordMatch);
    form.addEventListener("submit", handleFormSubmit);
});

//email validation/////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");

    function validateEmail() {
        var email = emailInput.value;
        var emailPattern = /^[a-zA-Z0-9_.\-]+@byui\.edu$/; // Regular expression pattern for a byui.edu email address
        
        if (!emailPattern.test(email)) {
            alert("Please enter a valid BYUI email address.");
            return false;
        }
        return true;
    }

    var validateButton = document.querySelector('input[type="submit"]');
    validateButton.addEventListener("click", function(event) {
        if (!validateEmail()) {
            event.preventDefault(); // Prevent form submission if email is not valid
        }
    });
});

//Rating////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var pageRatingInput = document.getElementById("pageRating");
    var ratingValueSpan = document.getElementById("ratingValue");

    // Update the rating value span when the range input value changes
    pageRatingInput.addEventListener("input", function() {
        ratingValueSpan.textContent = pageRatingInput.value;
    });
});

//Hamburger menu/////////////////////////////////////////////

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');

       
});


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

// Bind the handleFormSubmission function to the form's submit event
var form = document.getElementById("form-container");
form.addEventListener("submit", handleFormSubmission);