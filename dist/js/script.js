// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const NavFixed = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > NavFixed) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humberger-line
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});
