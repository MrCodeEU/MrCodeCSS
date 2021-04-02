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