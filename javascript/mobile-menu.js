// DOM elements
const headerMenuIcon = document.querySelector('i');
const headerNavBar = document.querySelector('ul');

// When the menu icon is clicked
headerMenuIcon.addEventListener('click', () =>{
    // Show mobile-menu and change menu icon
    headerNavBar.classList.toggle('show-navbar')
    headerMenuIcon.classList.toggle('fa-bars')
    headerMenuIcon.classList.toggle('fa-x')

    // Disable scroll
    document.body.classList.toggle('disable-scroll')
})
