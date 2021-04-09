//#region Navbar
/*
    Function for Hamburger menu of the responsive navbar
*/

function classToggle() {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.nav-toggle').addEventListener('click', classToggle);
//#endregion

//#region Karusell
/*
    functions for Karusel
*/
//#endregion
//#region Modal
// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//#endregion