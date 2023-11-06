// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const NavFixed = header.offsetTop;

  if (window.pageYOffset > NavFixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Humberger-line
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});
