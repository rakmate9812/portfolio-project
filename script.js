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
const sections = document.querySelectorAll("section");
const popoverBtn = document.querySelector(".popover__btn");
const navItems = document.querySelectorAll(".nav__link");
// ///////////////////////////////////////////////////////////////////

// Intro Fade-in
// document.addEventListener("scroll", function () {
//   if (window.scrollY > 1) {
//     intro.classList.add("fade-in");
//   }
// });

// Sections fade in - Nav link gets active
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      navItems.forEach((item) => {
        entry.target.id === item.textContent
          ? item.classList.add("hover-class")
          : item.classList.remove("hover-class");
      });
      // observer.unobserve(entry.target);
    }
  });
};
const obsOptions = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
sections.forEach((sec) => observer.observe(sec));

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

// E-mail copy to clipboard, popover hiding
popoverBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("rakmate9812@gmail.com").then(
    function () {
      $(".popover__btn").popover("show");
      setTimeout(function () {
        $(".popover__btn").popover("hide");
      }, 1000);
    },
    function () {
      alert("Something went wrong!");
    }
  );

  $(".popover__btn").popover("show");
  setTimeout(function () {
    $(".popover__btn").popover("hide");
  }, 1000);
});
