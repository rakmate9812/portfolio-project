// Decided to skip OOP because of the small size of the project
"use strict";
// console.log($);

// Selectors
const skillTab = document.querySelector(".skill__tabs__container");
const tabs = document.querySelectorAll(".skill__tab");
const skillDeck = document.querySelector(".skill__deck__container");
const decks = document.querySelectorAll(".skill__deck");
const intro = document.getElementById("intro");
const todayDate = document.getElementById("today");
const intersections = document.querySelectorAll(".intersection");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");
const emailPopoverBtn = document.getElementById("emailFooter");
const forkify = document.querySelector(".forkify__logo");
// ///////////////////////////////////////////////////////////////////

// Intro Fade-in
// document.addEventListener("scroll", function () {
//   if (window.scrollY > 1) {
//     intro.classList.add("fade-in");
//   }
// });

// Sections fade in - Nav link gets active - with IntersectionObserver API
const obsOptions = {
  root: null,
  threshold: 0.5,
};

const intersectionCB = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      // console.log(entry.target.id);
      observer.unobserve(entry.target);
    }
  });
};

const navSectionsCB = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      navLinks.forEach((link) => {
        entry.target.id === link.textContent
          ? link.classList.add("hover-class")
          : link.classList.remove("hover-class");
      });
    }
  });
};

// prettier-ignore
const intersectionObserver = new IntersectionObserver(intersectionCB,obsOptions);
intersections.forEach((intersec) => intersectionObserver.observe(intersec));

const navSectionObserver = new IntersectionObserver(navSectionsCB, obsOptions);
sections.forEach((intersec) => navSectionObserver.observe(intersec));

// Tabulated "Skills" component
skillTab.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".skill__tab");

  if (!clicked) return;

  tabs.forEach((tab) => {
    tab.classList.remove("active");

    decks[+tab.dataset.tab - 1].classList.contains("d-none")
      ? ""
      : decks[+tab.dataset.tab - 1].classList.add("d-none");
  });

  clicked.classList.add("active");
  decks[+clicked.dataset.tab - 1].classList.remove("d-none");
});

// Today date insert into span
const formattedDate = function () {
  // prettier-ignore
  const monthNamesEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
  const today = new Date();
  const month = monthNamesEng[today.getMonth()];
  const year = today.getFullYear();
  return month + ", " + year;
};
todayDate.innerHTML = formattedDate();

// Sortable skill cards
$(".card-deck-sortable").sortable({
  connectWith: ".skill_deck",
});

// Popovers enabling
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Helper popover function
const helperPopup = function (btnID) {
  $("#" + btnID).popover("show");
  setTimeout(function () {
    $("#" + btnID).popover("hide");
  }, 1000);
};

// E-mail copy to clipboard, popover hiding
emailPopoverBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("rakmate9812@gmail.com");
  helperPopup(emailPopoverBtn.id);
});

// Navigating to my forkify app on click of the logo
forkify.addEventListener("click", function () {
  window.location.href = "https://rakmate9812-forkify.netlify.app/";
});

const progressRing = document.querySelector(".progress-ring");
const progressPercentage = progressRing.querySelector(
  ".progress-ring__percentage"
);

// let currentPercentage = 0;

// const updatePercentage = () => {
//   currentPercentage = (currentPercentage + 1) % 101;
//   progressPercentage.textContent = `${currentPercentage}%`;
// };

// setInterval(updatePercentage, 20);
