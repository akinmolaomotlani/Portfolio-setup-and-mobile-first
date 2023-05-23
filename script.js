"use strict ";

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");
btnMobileNav = addEventListener("click", function () {
  headerNav.classList.toggle("nav-open");
});