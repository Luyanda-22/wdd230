const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets); 
  }
  
  getProphetData();


  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.classList.add('card'); // Add the 'card' class to the card
        
        // Full name
        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Combine 'name' and 'lastname' to form the full name
        
        // Date of birth
        let birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        
        // Place of birth
        let birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        // Image container
        let imageContainer = document.createElement('div');
        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Append the image to the image container
        imageContainer.appendChild(portrait);
        
        // Append the elements to the card
        card.appendChild(fullName); // Full name
        card.appendChild(birthDate); // Date of birth
        card.appendChild(birthPlace); // Place of birth
        card.appendChild(imageContainer); // Image container
        
        // Append the card to the cards container
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
