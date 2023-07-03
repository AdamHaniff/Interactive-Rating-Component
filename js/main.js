import { setBorderStyle, addClass, removeClass } from "./helpers.js";
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

// FUNCTIONS
const setSelectedRatingText = function () {
  let rating;
  if (!selectedRating) return;
  rating = selectedRating.textContent;
  selectionText.textContent = `You selected ${rating} out of 5`;
};

const displayThankYouComponent = function () {
  addClass("hidden", ratingComponent);
  removeClass("hidden", thankYouComponent);
};

const displayNoRating = function () {
  setTimeout(() => {
    alert("You need to select a rating before submitting");
    setBorderStyle("none", ratingNumber);
  }, 20);
};

// EVENT LISTENER CALLBACK FUNCTIONS
const addHoveredClass = function (e) {
  const hoveredRatingElement = e.target.closest(".rating-number");
  if (!hoveredRatingElement) return;
  addClass("hovered", hoveredRatingElement);
};

const removeHoveredClass = function (e) {
  const unhoveredRatingElement = e.target.closest(".rating-number");
  if (!unhoveredRatingElement) return;
  removeClass("hovered", unhoveredRatingElement);
};

const handleRatingClick = function (e) {
  const clickedRating = e.target.closest(".rating-number");
  if (!clickedRating) return;

  if (!selectedRating) {
    addClass("clicked", clickedRating);
    selectedRating = clickedRating;
  } else {
    if (clickedRating === selectedRating) {
      removeClass("hovered", clickedRating);
      removeClass("clicked", clickedRating);
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
    setBorderStyle(`1px solid ${orangeColor}`, ratingNumber);
    displayNoRating();
    return;
  }
  displayThankYouComponent();
};

// EVENT LISTENERS
ratingNumbersContainer.addEventListener("mouseover", addHoveredClass);
ratingNumbersContainer.addEventListener("mouseout", removeHoveredClass);
ratingNumbersContainer.addEventListener("click", handleRatingClick);
submitBtn.addEventListener("click", handleSubmitClick);
