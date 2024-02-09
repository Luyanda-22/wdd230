// Declaring variables for input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Created click event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item element
        const li = document.createElement('li');

        // Create a delete button element
        const deleteButton = document.createElement('button');

        // Populate the li element's textContent with the input value
        li.textContent = input.value;

        // Populate the delete button's textContent with the delete symbol ❌
        deleteButton.textContent = '❌';

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list in HTML
        list.append(li);

        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input value
        input.value = '';

        // Send the focus back to the input element
        input.focus();
    } else {
        // Provide a message or do nothing and return the focus to the input field
        input.focus();
    }
 
});

// Created a delete all button//////////////////////////////////////////////////////////

const deleteAllButton = document.createElement('button');

// Set the text content of the "Delete All" button to indicate its purpose
deleteAllButton.textContent = 'Delete All';

// Append the "Delete All" button to the main element
document.querySelector('main').appendChild(deleteAllButton);

// Add an event listener to the "Delete All" button
deleteAllButton.addEventListener('click', function () {
    // Remove all list items from the unordered list
    list.innerHTML = '';

    // Send the focus back to the input element
    input.focus();
});


