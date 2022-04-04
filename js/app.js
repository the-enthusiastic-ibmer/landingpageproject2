/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
var ulElement = document.querySelectorAll('ul');
var pElement = document.createElement('p');

/* Create an array for the unordered list which will 
/  become the Nav Bar
*/
const navItems = ['Section1','Section2', 'Section3'];
var navUl = document.getElementById('navbar__list');

/* This function is called to create list items
/  The argument passed to it is from the navUl Array
/  The first character is stripped, changed to lower case
/  to create the anchor tag in the list item.
*/
function createUlItem(liName){
  // Create a 'li' Element
  let liItem = document.createElement('li');
  // Create an 'a' (anchor tag) Element
  let anchorTag = document.createElement('a');
  // Get the first character from the array and make it lower case.
  let firstLetter = liName.charAt(0).toLowerCase();
  // Remove the first character
  let tempName = liName.substr(1);
  // Add the hastag, first character and rest of the name to create the anchor tag
  anchorTag.href = '#'+firstLetter+tempName;
  anchorTag.textContent = liName;
  liItem.append(anchorTag);
  return liItem;
}
for (item of navItems){
  liItem = item;
  navUl.appendChild(createUlItem(liItem));
}

