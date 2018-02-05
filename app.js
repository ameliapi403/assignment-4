// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Get HTML Elements
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
var openButton      = document.querySelector('#open-mobile-menu');
var closeButton     = document.querySelector('#close-mobile-menu');
var mobileMenu      = document.querySelector('#mobile-menu');



// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Define Abilities (Functions)
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
function openMenu() {
    mobileMenu.className = 'mobile-menu open';
}

function closeMenu() {
    mobileMenu.className = 'mobile-menu';
}



// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Wire everything up
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
