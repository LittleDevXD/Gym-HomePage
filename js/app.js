let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    console.log('click')
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('click')
    
})