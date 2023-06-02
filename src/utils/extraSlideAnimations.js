import resetAnimations from "/src/utils/resetAnimations";
import alterTransitionValue from "/src/utils/alterTransitionValue";

const extraSlideAnimations = (slideIndex, direction) => {
  let slide; // your indigation towards the spaghetti code
  let prevSlide;
  let nextSlide;
  const icon = document.querySelector(".example-icon");
  switch (slideIndex) {
    case 0:
      slide = document.querySelector(".slide-1");
      nextSlide = document.querySelector(".slide-2");
      const arrows = document.querySelector(".example-arrows");
      console.log("moving from SlideOne to SlideTwo");
      slide.querySelector(".slide-instruction").style.transform =
        "translateX(-160px)";
      nextSlide.querySelector(".slide-instruction").style.visibility =
        "visible";
      nextSlide.querySelector(".slide-instruction").style.animationPlayState =
        "running";
      icon.style.animation = "none";
      arrows.style.visibility = "visible";
      arrows.style.animationPlayState = "running";
      break;
    case 1:
      slide = document.querySelector(".slide-2");
      prevSlide = document.querySelector(".slide-1");
      nextSlide = document.querySelector(".slide-3");
      if (direction > 0) {
        console.log("moving from SlideTwo to SlideThree");
        resetAnimations(nextSlide);
        slide.querySelector(".slide-instruction").style.transform =
          "translateY(200px)";
        nextSlide.querySelector(".slide-instruction").style.transform =
          "translateY(230px)";
        slide.querySelector(".forwards-arrows-container").style.transform =
          "translate(110px, 40px)";
        slide.querySelector(".backwards-arrows-container").style.transform =
          "translate(50px, 40px)";
        icon.style.transform = "translate(50px, 40px)";
        slide.querySelector(".example-arrows").style.visibility = "hidden";
        setTimeout(function () {
          nextSlide.querySelector(".example-icon").style.visibility = "visible";
          nextSlide.querySelector(".example-arrows").style.visibility =
            "visible";
        }, 1500);
      } else {
        console.log("moving back to SlideOne");
        resetAnimations(slide);
        resetAnimations(prevSlide);
        prevSlide.querySelector(".slide-instruction").style.transform =
          "translateX(0px)";
        icon.style.animation = "appear-and-vanish 6s infinite";
      }
      break;
    case 2:
      slide = document.querySelector(".slide-3");
      prevSlide = document.querySelector(".slide-2");
      nextSlide = document.querySelector(".slide-4")
      if (direction > 0) {
        console.log("moving from SlideThree to SlideFour");
        resetAnimations(slide)
        const fakeCursor = slide.querySelector(".fake-cursor-container");
        fakeCursor.style.visibility = "visible";
        fakeCursor.style.animation = "hover-arrows 7.5s infinite";
        slide.querySelector(".forwards-arrows-container").style.animation =
          "toggle-off-on 7.5s infinite";
        slide.querySelector(".backwards-arrows-container").style.animation =
          "toggle-on-off 7.5s infinite";
        nextSlide.querySelector(".slide-instruction").style.transform = "translateX(-320px)"
      } else {
        console.log("moving back to SlideTwo");
        resetAnimations(prevSlide);
        resetAnimations(slide)
        prevSlide.querySelector(".forwards-arrows-container").style.transform =
          "translateX(60px)";
        prevSlide.querySelector(".backwards-arrows-container").style.transform =
          "translateX(0px)";
        icon.style.transform = "translateX(0px)";
        slide.querySelector(".example-icon").style.visibility = "hidden";
        prevSlide.querySelector(".example-arrows").style.animationPlayState =
          "running";
        const instruction = prevSlide.querySelector(".slide-instruction");
        alterTransitionValue(instruction);
        instruction.style.transform = "translateY(0px)";
        prevSlide.querySelector(".forwards-arrows-container").style.transform =
          "translateX(0px)";
        slide.querySelector(".example-arrows").style.visibility = "hidden";
        prevSlide.querySelector(".example-arrows").style.visibility = "visible";
        slide.querySelector(".slide-instruction").style.transform =
          "translateY(0px)";
      }
      break;
    case 3:
      prevSlide = document.querySelector(".slide-3");
      slide = document.querySelector(".slide-4");
      nextSlide = document.querySelector(".slide-5")
      if (direction > 0) {
        console.log("moving from SlideFour to SlideFive");
      } else {
        console.log("moving back to SlideThree");
        const fakeCursor = prevSlide.querySelector(".fake-cursor-container");
        fakeCursor.style.visibility = "hidden";
        prevSlide.querySelector(".forwards-arrows-container").style.animation =
          "none";
        prevSlide.querySelector(".backwards-arrows-container").style.animation =
          "none";
          slide.querySelector(".slide-instruction").style.transform =
          "translateX(0px)";
        

      }
      break;
    case 4:
      slide = document.querySelector(".slide-5");
      prevSlide = document.querySelector(".slide-4");
      console.log("moving back to SlideFour");
      break;
    default:
      break;
  }
};

export default extraSlideAnimations;
