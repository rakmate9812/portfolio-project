// Decided to skip OOP because of the small size of the project
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
var jq = jQuery.noConflict(); // avoiding conflict with bootstrap's jQuery

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
const forkify = document.querySelector(".forkify__logo");
const pizzaed = document.querySelector(".pizzaed_logo");
const mediaQuery = window.matchMedia("(max-width: 40rem)");
const menu = document.getElementById("navbarId");
const emailPopoverBtn = document.getElementById("emailIcon");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
// ///////////////////////////////////////////////////////////////////

// Sections fade in - Nav link gets active - with IntersectionObserver API
const obsOptions = {
  rootMargin: "-30%",
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

// Navigating to my forkify app on click of the logo
forkify.addEventListener("click", function () {
  window.location.href = "https://rakmate9812-forkify.netlify.app/";
});

// Navigating to my forkify app on click of the logo
forkify.addEventListener("click", function () {
  window.location.href = "https://rakmate9812-forkify.netlify.app/";
});

// Skill body text toggle
jq(document).ready(function () {
  jq(".card .text__toggler").click(function () {
    jq(this).closest(".card").find(".card-text").toggle();
  });
});
// Popovers enabling
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Helper popover function
const helperPopup = function (btnID) {
  jq("#" + btnID).popover("show");
  setTimeout(function () {
    jq("#" + btnID).popover("hide");
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
  jq(document).ready(function () {
    jq(".navbar-toggler").click(function () {
      jq(".navbar-collapse").collapse("toggle");
    });
  });

  // Mobile view navbar closing on click of an element
  jq(document).ready(function () {
    jq(".navbar-nav li a").click(function () {
      jq(".navbar-collapse").collapse("toggle");
    });
  });

  // Mobile view navbar closing upon touch of the page
  document.body.addEventListener("click", function (e) {
    if (!e.target.closest("#navbarId") && menu.classList.contains("show")) {
      jq(".navbar-collapse").collapse("toggle");
    }
  });

  // Progress bar toggler
  jq(document).ready(function () {
    jq(".card .text__toggler").click(function () {
      jq(this).closest(".card").find(".mobile__toggler").toggle();
    });
  });

  // Removing rounded edges from Skill carousel
  jq(document).ready(function () {
    jq(".carousel-inner").removeClass("very_rounded_edges");
  });
}
////////////////
