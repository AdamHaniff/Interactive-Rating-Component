"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

// when a number is clicked, we want that number to have an orange background.
// we will use an event listener for this - maybe use event propagation on the parent container so that we dont have to add a function on each individual element.
// if an element is already clicked and we click another one, we need to reset to default state and have that new element clicked

const ratingNumbersContainer = document.querySelector(
  ".rating-numbers-container"
);

ratingNumbersContainer.addEventListener("click", function (e) {
  const number = e.target.closest(".number");
  console.log(number);
  number.classList.add("clicked");
  number.classList.remove("number_hover");
});
