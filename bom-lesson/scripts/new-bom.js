// Declaring variables for input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of getChapterList function
let chaptersArray = getChapterList() || [];

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

// Create a delete all button//////////////////////////////////////////////////////////

const deleteAllButton = document.createElement('button');

// Setting the text content of the "Delete All" button to indicate its purpose
deleteAllButton.textContent = 'Delete All';

// Appending the "Delete All" button to the main element
document.querySelector('main').appendChild(deleteAllButton);

// Add an event listener to the "Delete All" button
deleteAllButton.addEventListener('click', function () {
    // Removing all list items from the unordered list
    list.innerHTML = '';

    // Sending the focus back to the input element
    input.focus();
});

// The function getChapterList
function getChapterList() {
    return [];
}

// Populating displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

// The button click event listener
button.addEventListener('click', () => {
    if (input.value != '') {  // makes sure the input is not empty
      displayList(input.value); // calls the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // adds the chapter to the array
      setChapterList(); // updates the localStorage with the new array
      input.value = ''; // clears the input
      input.focus(); // sets the focus back to the input
    }
});

// The displaylist function
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
}

// The setChapterList Function
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
  
// The getChapterList Function
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
  
// The deleteChapter Function
  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
  