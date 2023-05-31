import resetAnimations from "/src/utils/resetAnimations";

const extraSlideAnimations = (slideIndex, direction) => {
    const animationSlideIndex = direction > 0 ? slideIndex : slideIndex + direction;
    let slide // your indigation towards the spaghetti code
    switch (animationSlideIndex) {
      case 0:
        slide = document.querySelector('.slide-1')
        const instruction = slide.querySelector('.slide-instruction');
        const icon = slide.querySelector('.example-icon')
        if (direction > 0) {
          console.log("moving from SlideOne to SlideTwo");
          instruction.style.transform = 'translateX(-160px)';
          icon.style.animation = 'none';
          const arrows = document.querySelector('.example-arrows')
          arrows.style.visibility = 'visible'
          arrows.style.animationPlayState = "running"; 
          console.log(arrows, arrows.style)
        } else {
          console.log("moving back to SlideOne");
          instruction.style.transform = 'translateX(0px)';
          icon.style.animation = 'appear-and-vanish 6s infinite'
          resetAnimations(slide)
        }
        break;
      case 1:
        slide = document.querySelector('.slide-2')
        if (direction > 0) {
          console.log("moving from SlideTwo to SlideThree");
        } else {
          console.log("moving back to SlideTwo");
          resetAnimations(slide)
        }
        break;
      case 2:
        slide = document.querySelector('.slide-3')
        if (direction > 0) {
          console.log("moving from SlideThree to SlideFour");
        } else {
          console.log("moving back to SlideThree");
          resetAnimations(slide)
        }
        break;
      case 3:
        slide = document.querySelector('.slide-4')
        if (direction > 0) {
          console.log("moving from SlideFour to SlideFive");
        } else {
          console.log("moving back to SlideFour");
          resetAnimations(slide)
        }
        break;
      case 4:
        slide = document.querySelector('.slide-5')
        if (direction > 0) {
          console.log("attempting to move forward from SlideFive");
        } else {
          console.log("moving back to SlideFive");
          resetAnimations(slide)
        }
        break;
      default:
        break;
    }
  };

  export default extraSlideAnimations