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
let selectedRating;

// FUNCTIONS
const addHoveredClass = function (e) {
  const hoveredRating = e.target.closest(".rating-number");
  if (!hoveredRating) return;
  hoveredRating.classList.add("hovered");
};

const removeHoveredClass = function (e) {
  const unhoveredRating = e.target.closest(".rating-number");
  if (!unhoveredRating) return;
  unhoveredRating.classList.remove("hovered");
};

const setSelectedRatingText = function () {
  let rating;
  if (!selectedRating) return;
  rating = selectedRating.textContent;
  selectionText.textContent = `You selected ${rating} out of 5`;
};

const handleRatingClick = function (e) {
  const clickedRating = e.target.closest(".rating-number");
  if (!clickedRating) return;

  if (!selectedRating) {
    clickedRating.classList.add("clicked");
    selectedRating = clickedRating;
  } else {
    if (clickedRating === selectedRating) {
      clickedRating.classList.remove("clicked");
      clickedRating.classList.add("hovered");
      selectedRating = null;
    } else {
      selectedRating.classList.remove("clicked");
      clickedRating.classList.add("clicked");
      selectedRating = clickedRating;
    }
  }
  setSelectedRatingText();
};

const handleSubmitClick = function () {
  if (!selectedRating) return;
  ratingComponent.classList.add("hidden");
  thankYouComponent.classList.remove("hidden");
};

// EVENT LISTENERS
ratingNumbersContainer.addEventListener("mouseover", addHoveredClass);
ratingNumbersContainer.addEventListener("mouseout", removeHoveredClass);
ratingNumbersContainer.addEventListener("click", handleRatingClick);
submitBtn.addEventListener("click", handleSubmitClick);
