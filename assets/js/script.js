/* =============================== TOGGLE BUTTON =============================== */
const toggleButton = document.getElementById("nav-toggle"),
  toggleContent = document.getElementById("nav-menu"),
  toggleClose = document.getElementById("nav-close");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleContent.classList.add("show-toggle");
  });
}

if (toggleClose) {
  toggleClose.addEventListener("click", () => {
    toggleContent.classList.remove("show-toggle");
  });
}

/* =============================== HEADER SHADOW =============================== */
addEventListener("scroll", () => {
  const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
});

/* =============================== SCROLL UP =============================== */

addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
});
