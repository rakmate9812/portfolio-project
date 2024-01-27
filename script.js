// Decided to skip OOP because of the small size of the project
import $ from "jquery"; // TODO - DOES NOT WORK
// console.log($);

// Selectors
const skillTab = document.querySelector(".skill__tabs__container");
const tabs = document.querySelectorAll(".skill__tab");
const skillDeck = document.querySelector(".skill__deck__container");
const decks = document.querySelectorAll(".skill__deck");
const intro = document.getElementById("intro");
const age = document.getElementById("age");
const intersections = document.querySelectorAll(".intersection");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");
const emailPopoverBtn = document.getElementById("emailFooter");
const forkify = document.querySelector(".forkify__logo");
const pizzaed = document.querySelector(".pizzaed_logo");
const mediaQuery = window.matchMedia("(max-width: 40rem)");
const menu = document.getElementById("navbarId");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
// ///////////////////////////////////////////////////////////////////

// Sections fade in - Nav link gets active - with IntersectionObserver API
const obsOptions = {
  rootMargin: "-20%",
  threshold: 0,
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

const navSectionsCB = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.id);
      if (mediaQuery.matches) {
        observer.unobserve(entries[0].target); // Unobserve the target if the screen size is under 40 rem
        return;
      } else {
        navLinks.forEach((link) => {
          entry.target.id === link.textContent
            ? link.classList.add("hover-class")
            : link.classList.remove("hover-class");
        });
      }
    }
  });
};

// prettier-ignore
const intersectionObserver = new IntersectionObserver(intersectionCB,obsOptions);
intersections.forEach((intersec) => intersectionObserver.observe(intersec));

const navSectionObserver = new IntersectionObserver(navSectionsCB, obsOptions);
sections.forEach((intersec) => navSectionObserver.observe(intersec));

// // Today date insert into span
// const formattedDate = function () {
//   // prettier-ignore
//   const monthNamesEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
//   const today = new Date();
//   const month = monthNamesEng[today.getMonth()];
//   const year = today.getFullYear();
//   return month + ", " + year;
// };
// // todayDate.innerHTML = formattedDate();

const currentAge = function (birthYear) {
  const currentYear = new Date().getFullYear();

  return currentYear - birthYear;
};

age.innerHTML = currentAge(1998);

// Popovers enabling
[...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Helper popover function
const helperPopup = function (btnID) {
  $("#" + btnID).popover("show");
  setTimeout(function () {
    $("#" + btnID).popover("hide");
  }, 1000);
};

// // E-mail copy to clipboard, popover hiding
// emailPopoverBtn.addEventListener("click", function () {
//   navigator.clipboard.writeText("rakmate9812@gmail.com");
//   helperPopup(emailPopoverBtn.id);
// });

forkify.addEventListener("click", function () {
  window.location.href = "https://rakmate9812-forkify.netlify.app/";
});

pizzaed.addEventListener("click", function () {
  window.location.href = "https://github.com/rakmate9812/pizza-app";
});

// Skill body text toggle
$(document).ready(function () {
  $(".card .text__toggler").click(function () {
    $(this).closest(".card").find(".card-text").toggle();
  });
});

// MOBILE VIEW
if (mediaQuery.matches) {
  // Mobile view navbar closing on click of the navbar-toggler
  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").collapse("toggle");
    });
  });

  // Mobile view navbar closing on click of an element
  $(document).ready(function () {
    $(".navbar-nav li a").click(function () {
      $(".navbar-collapse").collapse("toggle");
    });
  });

  // Mobile view navbar closing upon touch of the page
  document.body.addEventListener("click", function (e) {
    if (!e.target.closest("#navbarId") && menu.classList.contains("show")) {
      $(".navbar-collapse").collapse("toggle");
    }
  });

  // Progress bar toggler
  $(document).ready(function () {
    $(".card .text__toggler").click(function () {
      $(this).closest(".card").find(".mobile__toggler").toggle();
    });
  });

  // Removing rounded edges from Skill carousel
  $(document).ready(function () {
    $(".carousel-inner").removeClass("very_rounded_edges");
  });
}
////////////////
