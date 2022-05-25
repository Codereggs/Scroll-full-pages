//Global Vars
var actualSec: number = -2;
var verticalCount: number = 0;
var horizontalCount: number = 0;
var isChanging: { direction: string } = { direction: "none" };

// Debounce
export const debounce: (
  callback: any,
  wait: any
) => (...args: any[]) => void = (callback, wait) => {
  let timerId: any;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

const section: string = ".sections";

//Move in screen
export const moveInScreen: (e: any) => void = (e: any) => {
  getUpDown(e.deltaY > 0, section);
};

type directionsParams = {
  (sectionsDiv: Element, direction: string): void;
};

//Horizontal Movement - Sections
const horizontalSec: directionsParams = (sectionsDiv, direction) => {
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
const verticalSec: directionsParams = (sectionsDiv, direction) => {
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

const deleteActiveAndStyles: (sec: any, index: number) => void = (
  sec: any,
  index: number
) => {
  sec.classList.remove("active");
  actualSec = index;
};

// Get up down
export const getUpDown: (bool: boolean, section: string) => void = async (
  bool,
  section = ".sections"
) => {
  const d: Document = document;
  const sectionsDiv = d.querySelector(section) as HTMLElement;
  if (sectionsDiv === null) return;
  const sections = sectionsDiv.children;
  //Down
  if (bool) {
    Array.from(sections).forEach((sec, index) => {
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
