// Nav Menu
const mobileNavButton = document.getElementById('mobi-menu');
const mobileNav = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');
const body = document.querySelector('body');
const navList = document.querySelector('#nav-list');

mobileNavButton.addEventListener('click',() => {
  body.style.overflow = 'hidden';
  mobileNav.style.display = 'block';
});

closeModalButton.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

navList.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};
