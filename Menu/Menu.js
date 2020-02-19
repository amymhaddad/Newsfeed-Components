/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


//Create each element and add details to it
function createTag(tagType, item) {
  const element = document.createElement(tagType);
  element.innerHTML = item;
  return element;
}

//Create menu
function createMenu(menuItems) {
  const div = document.createElement("div");
  div.className = "menu";

  const ul = document.createElement("ul");

  menuItems.forEach(item => {
    const newElement = createTag("li", item);
    ul.appendChild(newElement);
  })
  div.appendChild(ul);

  const menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", function() {
    div.classList.toggle("menu--open");
  })

  return div;
}

//Create component skeleton
function addMenu(menuItems) {
  const header = document.querySelector(".header");
  
  const allMenuItems = createMenu(menuItems);
  header.appendChild(allMenuItems);
  return header;
}

const menu = addMenu(menuItems);


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
