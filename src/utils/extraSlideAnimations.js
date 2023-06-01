import resetAnimations from "/src/utils/resetAnimations";

const extraSlideAnimations = (slideIndex, direction) => {
    let slide // your indigation towards the spaghetti code
    let prevSlide
    let nextSlide 
    const icon = document.querySelector('.example-icon')
    switch (slideIndex) {
      case 0:
        slide = document.querySelector('.slide-1')
        nextSlide = document.querySelector('.slide-2')
        const arrows = document.querySelector('.example-arrows')
          console.log("moving from SlideOne to SlideTwo");
          slide.querySelector('.slide-instruction').style.transform = 'translateX(-160px)';
          nextSlide.querySelector('.slide-instruction').style.visibility = "visible";
          nextSlide.querySelector('.slide-instruction').style.animationPlayState = "running";
          icon.style.animation = 'none';
          arrows.style.visibility = 'visible'
          arrows.style.animationPlayState = "running"; 
        break;
      case 1:
        slide = document.querySelector('.slide-2')
        prevSlide = document.querySelector('.slide-1')
        nextSlide = document.querySelector('.slide-3')
        if (direction > 0) {
          console.log("moving from SlideTwo to SlideThree");
          const instruction = slide.querySelector('.slide-instruction')
          instruction.style.visibility = "visible";
          instruction.style.transform = "translateY(-200px)";
          slide.querySelector('.forwards-arrows-container').style.transform = "translateX(110px)"
          slide.querySelector('.backwards-arrows-container').style.transform = "translateX(50px)"
          icon.style.transform = "translateX(50px)"
          nextSlide.querySelector(".example-icon").style.visibility = "visible";
          slide.querySelector('.example-arrows').style.visibility = "hidden";
          nextSlide.querySelector('.example-arrows').style.visibility ="visible";
        } else {
          console.log("moving back to SlideOne");
          resetAnimations(slide);
          resetAnimations(prevSlide);
          prevSlide.querySelector('.slide-instruction').style.transform = 'translateX(0px)';
          icon.style.animation = 'appear-and-vanish 6s infinite';
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
          prevSlide.querySelector('.forwards-arrows-container').style.transform = "translateX(60px)"
          prevSlide.querySelector('.backwards-arrows-container').style.transform = "translateX(0px)"
          icon.style.transform = "translateX(0px)"
          slide.querySelector(".example-icon").style.visibility = "hidden";
          prevSlide.querySelector('.example-arrows').style.animationPlayState = "running"; 
          prevSlide.querySelector('.slide-instruction').style.transform = "translateY(0px)"
          prevSlide.querySelector('.forwards-arrows-container').style.transform = "translateX(0px)"
          slide.querySelector('.example-arrows').style.visibility = "hidden";
          prevSlide.querySelector('.example-arrows').style.visibility ="visible";
        }
        break;
      case 3:
        slide = document.querySelector('.slide-4')
        if (direction > 0) {
          console.log("moving from SlideFour to SlideFive");
        } else {
          console.log("moving back to SlideThree");
        }
        break;
      case 4:
        slide = document.querySelector('.slide-5')
          console.log("moving back to SlideFour");
        break;
      default:
        break;
    }
  };

  export default extraSlideAnimations