import { useState } from "react";
import SlideZero from "/src/components/GameInstructions/slides/SlideZero";
import SlideOne from "/src/components/GameInstructions/slides/SlideOne.jsx";
import SlideTwo from "/src/components/GameInstructions/slides/SlideTwo.jsx";
import SlideThree from "/src/components/GameInstructions/slides/SlideThree.jsx";
import SlideFour from "/src/components/GameInstructions/slides/SlideFour.jsx";
import SlideFive from "/src/components/GameInstructions/slides/SlideFive.jsx";
import SlideSix from "/src/components/GameInstructions/slides/SlideSix.jsx"
import PrevSlideBtn from "/src/components/GameInstructions/slide-components/PrevSlideBtn";
import NextSlideBtn from "/src/components/GameInstructions/slide-components/NextSlideBtn";
import extraSlideAnimations from "/src/utils/extraSlideAnimations";

import "/src/css/game-instructions/game-instructions.css";

function GameInstructions() {
    const [slideContainerPosition, setSlideContainerPosition] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
  
    const slideMovements = [320, 160, 0, 0, 320, 320, 320]; //px values
  
    const slideIn = (direction) => { // direction: 1 for forward, -1 for backward
      if (direction < 0 && slideIndex <= 0) return;
      if (direction > 0 && slideIndex >= slideMovements.length - 1) return;
      const movement = direction > 0 ? slideMovements[slideIndex] : slideMovements[slideIndex - 1];
      setSlideContainerPosition((prev) => prev - direction * movement);
      extraSlideAnimations(slideIndex, direction)
      console.log("slideindex", slideIndex)
      setSlideIndex((prev) => prev + direction);
      console.log("slideindex", slideIndex)
    };

  return (
    <div className="game-instructions">
      <div className="projector-screen">
        <div className="slide-container" style={{ left: `${slideContainerPosition}px`}}>
          <SlideZero /><SlideOne /><SlideTwo /><SlideThree /><SlideFour /><SlideFive /><SlideSix />
        </div>
      </div>
      <div className="slide-controls">
        {slideContainerPosition === 0 && <NextSlideBtn slideIn={() => slideIn(1)} text="SHOW ME HOW"></NextSlideBtn>}
        {slideContainerPosition < 0 && <PrevSlideBtn slideIn={() => slideIn(-1)} />}
        {slideContainerPosition < 0 && slideIndex < 6 && <NextSlideBtn slideIn={() => slideIn(1)} text="GOT IT"></NextSlideBtn>}
      </div>
    </div>
  );
}

export default GameInstructions;
