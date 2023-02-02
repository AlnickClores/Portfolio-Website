const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.contents');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});