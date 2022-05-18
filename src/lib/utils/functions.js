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
  console.log("deltaY", e.deltaY);
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
      }, ${
        verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`
      }, 0px);position: relative;height: 100vh;width: 100vw;transition: all 1s ease 0s;`
    );
  }
  if (direction === "left") {
    horizontalCount--;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${
        verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`
      }, 0px);position: relative;height: 100vh;width: 100vw;transition: all 1s ease 0s;`
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
      }, ${
        verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`
      }, 0px);position: relative;height: 100vh;width: 100vw;transition: all 1s ease 0s;`
    );
  }
  if (direction === "up") {
    verticalCount--;
    sectionsDiv.setAttribute(
      "style",
      `transform: translate3d(${
        horizontalCount === 0 ? 0 + "%" : `-${horizontalCount}00%`
      }, ${
        verticalCount === 0 ? 0 + "%" : `-${verticalCount}00%`
      }, 0px);position: relative;height: 100vh;width: 100vw;transition: all 1s ease 0s;`
    );
  }
};

// Delete active and styles

const deleteActiveAndStyles = (sec, index) => {
  sec.classList.remove("active");
  actualSec = index;
};

// Get up down
export const getUpDown = async (bool, section) => {
  const d = document;
  const sectionsDiv = d.querySelector(section);
  const sections = d.querySelector(section).childNodes;

  //Down
  if (bool) {
    sections.forEach((sec, index) => {
      console.log("sec", sec, "index", index);
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
    actualSec = -2;
  }
  //Up
  else {
    Array.from(sections)
      .slice()
      .reverse()
      .forEach((sec, index) => {
        console.log("sec", sec, "index", index);
        if (sec.classList.contains("active")) {
          if (index === sections.length - 1) return;
          // Function delete active
          deleteActiveAndStyles(sec, index);
          //Use is Changing to know direction inverted
          if (sec.classList.contains("horizontal"))
            isChanging.direction = "horizontal";
          if (sec.classList.contains("vertical"))
            isChanging.direction = "vertical";
          console.log("actualsec", actualSec);
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
    actualSec = -2;
  }
};
