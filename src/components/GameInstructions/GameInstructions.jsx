import { useState } from "react";
import SlideOne from "/src/components/GameInstructions/slides/SlideOne.jsx";
import SlideTwo from "/src/components/GameInstructions/slides/SlideTwo.jsx";
import SlideThree from "/src/components/GameInstructions/slides/SlideThree.jsx";
import SlideFour from "/src/components/GameInstructions/slides/SlideFour.jsx";
import SlideFive from "/src/components/GameInstructions/slides/SlideFive.jsx";
import PrevSlideBtn from "/src/components/GameInstructions/slide-components/PrevSlideBtn";
import NextSlideBtn from "/src/components/GameInstructions/slide-components/NextSlideBtn";
import "/src/css/game-instructions/game-instructions.css";


function GameInstructions() {
  const [slideDistance, setSlideDistance] = useState(0);
  const condition = true;

  const slideRight = () => {
    if(slideDistance < -1279) return;
    setSlideDistance((prev) => prev - 320);
  };

  const slideLeft = () => {
    if (slideDistance >= 0) return;
    setSlideDistance((prev) => prev + 320);
  };

  return (
    <div className="game-instructions">
      <div className="projector-screen">
        <div className="slide-container" style={{ left: `${slideDistance}px`}}>
          <SlideOne /><SlideTwo /><SlideThree /><SlideFour /><SlideFive />
        </div>
      </div>
      {condition === true && <PrevSlideBtn slide={slideLeft} />}
      <NextSlideBtn slide={slideRight}></NextSlideBtn>
    </div>
  );
}

export default GameInstructions;
