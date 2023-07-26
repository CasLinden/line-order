import { useState, useEffect } from "react";
import SlideZero from "/src/components/GameInstructions/slides/SlideZero";
import SlideOne from "/src/components/GameInstructions/slides/SlideOne.jsx";
import SlideTwo from "/src/components/GameInstructions/slides/SlideTwo.jsx";
import SlideThree from "/src/components/GameInstructions/slides/SlideThree.jsx";
import SlideFour from "/src/components/GameInstructions/slides/SlideFour.jsx";
import SlideFive from "/src/components/GameInstructions/slides/SlideFive.jsx";
import SlideSix from "/src/components/GameInstructions/slides/SlideSix.jsx"
import PrevSlideBtn from "/src/components/GameInstructions/slide-components/PrevSlideBtn";
import NextSlideBtn from "/src/components/GameInstructions/slide-components/NextSlideBtn";
import HideSlideshowBtn from "/src/components/GameInstructions/slide-components/HideSlideshowBtn"
import ClickShield from "/src/components/GameInstructions/ClickShield"
import extraSlideAnimations from "/src/utils/extraSlideAnimations";
import info from "/src/assets/general-icons/info.svg"
import "/src/css/game-instructions/game-instructions.css";
import "/src/css/game-instructions/override-colors.css"

function GameInstructions() {
    const [slideContainerPosition, setSlideContainerPosition] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const [instructionsHidden, setInstructionsHidden] = useState(() => {
      const saved = localStorage.getItem('instructionsHidden');
      return saved 
        ? JSON.parse(saved)
        : false;
    });
  
    useEffect(() => {
      localStorage.setItem('instructionsHidden', JSON.stringify(instructionsHidden));
    }, [instructionsHidden]);

    const showInstructions = () => {
      setInstructionsHidden(false);
      setSlideContainerPosition(0)
      setSlideIndex(0)
    }

    const slideMovements = [320, 160, 0, 0, 320, 320, 320]; //px values
  
    const slideIn = (direction) => { // direction: 1 for forwards, -1 for backwards
      if (direction < 0 && slideIndex <= 0) return;
      if (direction > 0 && slideIndex >= slideMovements.length - 1) return;
      const movement = direction > 0 ? slideMovements[slideIndex] : slideMovements[slideIndex - 1];
      setSlideContainerPosition((prev) => prev - direction * movement);
      extraSlideAnimations(slideIndex, direction)
      setSlideIndex((prev) => prev + direction);
    };

  return (
    <div className="game-instructions">
        {instructionsHidden ? (
        <div className="instructions-placeholder">
          <SlideZero instructionsHidden={true} />
          <div className="i-container" onClick={showInstructions}>
            <img className="show-slideshow" src={info} alt="i for info" />
          </div>
        </div>
        ) : ( 
      <>
        <ClickShield position="top"></ClickShield>
        <div className="projector-screen">
          <div className="slide-container" style={{ left: `${slideContainerPosition}px`}}>
          <SlideZero instructionsHidden={false} /><SlideOne /><SlideTwo /><SlideThree /><SlideFour /><SlideFive /><SlideSix hide={() => setInstructionsHidden(true)} />
          </div>
        </div>
        <div className="slide-controls">
          {slideContainerPosition === 0 && <HideSlideshowBtn hide={() => setInstructionsHidden(true)} text="HOW TO PLAY"></HideSlideshowBtn>}
          {slideContainerPosition === 0 && <NextSlideBtn slideIn={() => slideIn(1)} text="HOW TO PLAY"></NextSlideBtn>}
          {slideContainerPosition < 0 && <PrevSlideBtn slideIn={() => slideIn(-1)} />}
          {slideContainerPosition < 0 && slideIndex < 6 && <NextSlideBtn slideIn={() => slideIn(1)} text="GOT IT"></NextSlideBtn>}
        </div>
        <ClickShield position="bottom"></ClickShield>
      </>
        )}
    </div>

  );
}

export default GameInstructions;
