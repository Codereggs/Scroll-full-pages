//Global Vars
var actualSec = -2;
var verticalCount = 0;
var horizontalCount = 0;
var isChanging = { direction: "none" };

// Debounce
export const debounce = (callback, wait) => {
  let timerId;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

//Move in screen
export const moveInScreen = (e) => {
  getUpDown(e.deltaY > 0 ? true : false, ".sections");
};

//Horizontal Movement - Sections
const horizontalSec = (sectionsDiv, direction) => {
  if (direction === "right") {
    horizontalCount++;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`}, 0px);`
    );
  }
  if (direction === "left") {
    horizontalCount--;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`}, 0px);`
    );
  }
};

//Vertical Movement - Sections
const verticalSec = (sectionsDiv, direction) => {
  if (direction === "down") {
    verticalCount++;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`}, 0px);`
    );
  }
  if (direction === "up") {
    verticalCount--;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`}, 0px);`
    );
  }
};

// Borrar Active y estilos

const deleteActiveAndStyles = (sec, index) => {
  sec.classList.remove("active");

  actualSec = index;
};

// Get up down
export const getUpDown = async (bool, section) => {
  const d = document;
  const sectionsDiv = d.querySelector(section);
  console.log(sectionsDiv);
  const sections = d.querySelector(section).childNodes;

  console.log(horizontalCount, verticalCount, actualSec);
  //Abajo
  if (bool) {
    sections.forEach((sec, index) => {
      //Intersection observer delete active class
      if (sec.classList.contains("active")) {
        //Ultimate
        if (index === sections.length - 1) return;
        // Function delete active
        deleteActiveAndStyles(sec, index);
      }
      //Movement data
      if (index === actualSec + 1) {
        sec.classList.add("active");
        if (sec.classList.contains("vertical"))
          return verticalSec(sectionsDiv, "down");
        if (sec.classList.contains("horizontal"))
          return horizontalSec(sectionsDiv, "right");
      }
    });
  }
  //Arriba
  else {
    Array.from(sections)
      .slice()
      .reverse()
      .forEach((sec, index) => {
        if (sec.classList.contains("active")) {
          if (index === sections.length - 1) return;
          // Function delete active
          deleteActiveAndStyles(sec, index);
          //Use is Changing to know direction inverted
          if (sec.classList.contains("horizontal"))
            isChanging.direction = "horizontal";
          if (sec.classList.contains("vertical"))
            isChanging.direction = "vertical";
        }
        if (index === actualSec + 1) {
          sec.classList.add("active");
          //Case of movements
          if (
            (sec.classList.contains("vertical") &&
              isChanging.direction === "vertical") ||
            (isChanging.direction === "vertical" &&
              sec.classList.contains("horizontal"))
          )
            return verticalSec(sectionsDiv, "up");
          if (
            (sec.classList.contains("horizontal") &&
              isChanging.direction === "horizontal") ||
            (isChanging.direction === "horizontal" &&
              sec.classList.contains("vertical"))
          )
            return horizontalSec(sectionsDiv, "left");
        }
      });
  }
};

export const css = new (function () {
  function addStyleSheet() {
    let head = document.head;
    let style = document.createElement("style");

    head.appendChild(style);
  }

  this.insert = function (rule) {
    if (document.styleSheets.length === 0) {
      addStyleSheet();
    }

    let sheet = document.styleSheets[document.styleSheets.length - 1];
    let rules = sheet.rules;

    sheet.insertRule(rule, rules.length);
  };
})();
