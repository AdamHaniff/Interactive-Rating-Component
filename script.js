"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const ratingNumbersContainer = document.querySelector(
  ".rating-numbers-container"
);
let selectedRating = null;

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

const handleClickedEvent = function (e) {
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
};

// EVENT LISTENERS
ratingNumbersContainer.addEventListener("mouseover", addHoveredClass);
ratingNumbersContainer.addEventListener("mouseout", removeHoveredClass);
ratingNumbersContainer.addEventListener("click", handleClickedEvent);
