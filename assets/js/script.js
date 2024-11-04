// /* =============================== SIGNIN =============================== */
// const signinButton = document.getElementById("signin-button"),
//     signinClose = document.getElementById("signin-close"),
//     signinContent = document.getElementById("signin-content"),
//     signupOnclick = document.getElementById('signup-onclick')

// if(signinButton){
//     signinButton.addEventListener( "click", () => {
//         signinContent.classList.add("show-signin")
//     })
// }

// if(signinClose){
//     signinClose.addEventListener( "click", () => {
//         signinContent.classList.remove("show-signin")
//     })
// }

// /* =============================== SIGNUP =============================== */
// const signupContent = document.getElementById("signup-content"),
//     signinOnclick = document.getElementById('signin-onclick'),
//     signupClose = document.getElementById("signup-close")

// if(signupClose){
//     signupClose.addEventListener( "click", () => {
//         signupContent.classList.remove("show-signup")
//     })
// } 

// /* =============================== ONCLICK =============================== */
// if(signupOnclick){
//     signupOnclick.addEventListener("click", () => {
//         signinContent.classList.remove("show-signin")
//         signupContent.classList.add("show-signup")
//     })
// }

// if(signinOnclick){
//     signinOnclick.addEventListener("click", () => {
//         signupContent.classList.remove("show-signup")
//         signinContent.classList.add("show-signin")
//     })
// }

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
const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
addEventListener("scroll", shadowHeader);

/* =============================== SCROLL UP =============================== */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
addEventListener("scroll", scrollUp);
