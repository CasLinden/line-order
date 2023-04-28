function toggleDirectionArrowsCss(goingBackwards) {
  const forwardsArrows = document.querySelector(".forwards-arrows");
  const backwardsArrows = document.querySelector(".backwards-arrows");
  if (goingBackwards === true) {
    forwardsArrows.classList.add("inactive-arrow-container");
    backwardsArrows.classList.remove("inactive-arrow-container");
  } else if (goingBackwards === false) {
    backwardsArrows.classList.add("inactive-arrow-container");
    forwardsArrows.classList.remove("inactive-arrow-container");
  }
}

export default toggleDirectionArrowsCss;
