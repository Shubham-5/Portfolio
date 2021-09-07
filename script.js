const navBurger = document.querySelector("#humburger");
const mobileNav = document.querySelector("#mobile-nav");

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});
