function toggleDirectionArrowsCss(goingBackwards) {
  const forwardsArrows = document.querySelector(".forwards-arrows");
  const backwardsArrows = document.querySelector(".backwards-arrows");
  if (!forwardsArrows || !backwardsArrows) return
  if (goingBackwards === true) {
    forwardsArrows.classList.add("inactive-arrows");
    backwardsArrows.classList.remove("inactive-arrows");
  } else {
    backwardsArrows.classList.add("inactive-arrows");
    forwardsArrows.classList.remove("inactive-arrows");
  }
}

export default toggleDirectionArrowsCss;
