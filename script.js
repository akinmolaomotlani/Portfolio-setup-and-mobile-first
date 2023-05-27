const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerNav = document.querySelector('.header');

btnMobileNav.addEventListener('click', () => {
  headerNav.classList.toggle('nav-open');
});
