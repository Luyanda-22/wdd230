document.addEventListener("DOMContentLoaded", function() {
    // Fetching JSON data from external file
    fetch('data/directory.json')
    .then(response => response.json())
    .then(data => {
        // Accessing the 'members' array from the JSON data
        const members = data.members;

        // Selecting the element where you want to display the JSON data
        const displayElement = document.getElementById('spotlight');

        // Iterating over each member and create HTML elements to display their information
        members.forEach(member => {
            // Creating elements for member information
            const companyDiv = document.createElement('div');
            companyDiv.classList.add('company');

            const image = document.createElement('img');
            image.setAttribute('src', member.image);
            image.setAttribute('alt', member.altText);

            const companyName = document.createElement('h3');
            companyName.textContent = member.companyName;

            const description = document.createElement('p');
            description.textContent = member.description;

            // Appending elements to companyDiv
            companyDiv.appendChild(image);
            companyDiv.appendChild(companyName);
            companyDiv.appendChild(description);

            // Appending companyDiv to displayElement
            displayElement.appendChild(companyDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
