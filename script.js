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
// ///////////////////////////////////////////////////////////////////

// Intro Fade-in
document.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    intro.classList.add("fade-in");
  }
});

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

// Sortable skill cards
$(".card-deck-sortable").sortable({
  connectWith: ".skill_deck",
});

// Today date insert into span
let today = new Date();
let monthNamesEng = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthNamesEng[today.getMonth()];
let year = today.getFullYear();
let date = month + ", " + year; // "January, 2023"
todayDate.innerHTML = date;
