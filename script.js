"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const ratingNumbersContainer = document.querySelector(
  ".rating-numbers-container"
);
const submitBtn = document.querySelector(".submit-btn");
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you-component");
const selectionText = document.querySelector(".selection-text");
const ratingNumber = document.querySelectorAll(".rating-number");
const orangeColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--orange"
);
let selectedRating = null;

// HELPER FUNCTIONS
const setSelectedRatingText = function () {
  let rating;
  if (!selectedRating) return;
  rating = selectedRating.textContent;
  selectionText.textContent = `You selected ${rating} out of 5`;
};

const setBorderStyle = function (elements, borderValue) {
  elements.forEach((el) => (el.style.border = borderValue));
};

const displayThankYouComponent = function () {
  ratingComponent.classList.add("hidden");
  thankYouComponent.classList.remove("hidden");
};

const showNoRating = function () {
  setTimeout(() => {
    alert("You need to select a rating before submitting");
    setBorderStyle(ratingNumber, "none");
  }, 20);
};

const addClass = function (className, element) {
  element.classList.add(className);
};

const removeClass = function (className, element) {
  element.classList.remove(className);
};

// EVENT LISTENER CALLBACK FUNCTIONS
const addHoveredClass = function (e) {
  const hoveredRatingElement = e.target.closest(".rating-number");
  if (!hoveredRatingElement) return;
  hoveredRatingElement.classList.add("hovered");
};

const removeHoveredClass = function (e) {
  const unhoveredRatingElement = e.target.closest(".rating-number");
  if (!unhoveredRatingElement) return;
  unhoveredRatingElement.classList.remove("hovered");
};

const handleRatingClick = function (e) {
  const clickedRating = e.target.closest(".rating-number");
  if (!clickedRating) return;

  if (!selectedRating) {
    addClass("clicked", clickedRating);
    selectedRating = clickedRating;
  } else {
    if (clickedRating === selectedRating) {
      removeClass("clicked", clickedRating);
      addClass("hovered", clickedRating);
      selectedRating = null;
    } else {
      removeClass("clicked", selectedRating);
      addClass("clicked", clickedRating);
      selectedRating = clickedRating;
    }
  }
  setSelectedRatingText();
};

const handleSubmitClick = function () {
  if (!selectedRating) {
    this.blur();
    setBorderStyle(ratingNumber, `1px solid ${orangeColor}`);
    showNoRating();
    return;
  }
  displayThankYouComponent();
};

// EVENT LISTENERS
ratingNumbersContainer.addEventListener("mouseover", addHoveredClass);
ratingNumbersContainer.addEventListener("mouseout", removeHoveredClass);
ratingNumbersContainer.addEventListener("click", handleRatingClick);
submitBtn.addEventListener("click", handleSubmitClick);
