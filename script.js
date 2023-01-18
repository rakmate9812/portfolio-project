// Decided to skip OOP because of this project's small size
// console.log($);

// Selectors
const skillTab = document.querySelector(".skill__container");
const tabs = document.querySelectorAll(".nav__tab");
console.log(tabs);
// ///////////////////////////////////////////////////////////////////

// Tabbed skill component
skillTab.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-item");
  // console.log(clicked);

  if (!clicked) return;

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  // TODO - add the active class, and prevent default
  clicked.classList.add("");
});
// Sortable cards
$(".card-deck-sortable").sortable({
  connectWith: ".carddeck",
});
