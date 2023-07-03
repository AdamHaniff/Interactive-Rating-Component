// HELPER FUNCTIONS
const setBorderStyle = function (borderValue, elements) {
  elements.forEach((el) => (el.style.border = borderValue));
};

const addClass = function (cssClass, element) {
  element.classList.add(cssClass);
};

const removeClass = function (cssClass, element) {
  element.classList.remove(cssClass);
};

export { setBorderStyle, addClass, removeClass };
