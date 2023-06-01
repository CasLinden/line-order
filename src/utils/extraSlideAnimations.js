import resetAnimations from "/src/utils/resetAnimations";

const extraSlideAnimations = (slideIndex, direction) => {
    // const animationSlideIndex = direction > 0 ? slideIndex : slideIndex + direction;
    let slide // your indigation towards the spaghetti code
    let prevSlide
    let nextSlide 
    const icon = document.querySelector('.example-icon')
    switch (slideIndex) {
      case 0:
        slide = document.querySelector('.slide-1')
        nextSlide = document.querySelector('.slide-2')
        const instruction = slide.querySelector('.slide-instruction');
        const arrows = document.querySelector('.example-arrows')
        // if (direction > 0) {
          console.log("moving from SlideOne to SlideTwo");
          // resetAnimations(slide)
          instruction.style.transform = 'translateX(-160px)';
          icon.style.animation = 'none';
          arrows.style.visibility = 'visible'
          arrows.style.animationPlayState = "running"; 
        // } else {
        //   console.log("moving back to SlideOne");

        
        //   arrows.style.visibility = "hidden"
        //   resetAnimations(slide)
        // }
        break;
      case 1:
        slide = document.querySelector('.slide-2')
        prevSlide = document.querySelector('.slide-1')
        if (direction > 0) {
          console.log("moving from SlideTwo to SlideThree");
          
        } else {
          console.log("moving back to SlideOne");
          resetAnimations(slide)
          resetAnimations(prevSlide)
          prevSlide.querySelector('.slide-instruction').style.transform = 'translateX(0px)';
          icon.style.animation = 'appear-and-vanish 6s infinite'
        }
        break;
      case 2:
        slide = document.querySelector('.slide-3')
        prevSlide = document.querySelector('.slide-2')
        if (direction > 0) {
          console.log("moving from SlideThree to SlideFour");
        } else {
          console.log("moving back to SlideTwo");
          resetAnimations(prevSlide)
          prevSlide.querySelector('.example-arrows').style.animationPlayState = "running"; 
        }
        break;
      case 3:
        slide = document.querySelector('.slide-4')
        if (direction > 0) {
          console.log("moving from SlideFour to SlideFive");
        } else {
          console.log("moving back to SlideThree");
          // resetAnimations(slide)
        }
        break;
      case 4:
        slide = document.querySelector('.slide-5')
        // if (direction > 0) {
        //   console.log("attempting to move forward from SlideFive");
        // } else {
          console.log("moving back to SlideFour");
          // resetAnimations(slide)
        // }
        break;
      default:
        break;
    }
  };

  export default extraSlideAnimations