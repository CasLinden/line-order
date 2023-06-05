import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import yamanote from "/src/lines/tokyo/jr/Yamanote Line";
import JRStationSign from "/src/components/StationSigns/UniqueSigns/JRStationSign.jsx";
import JRIcon from "/src/components/StationIcons/UniqueIcons/JRIcon.jsx";
import IconHolder from "/src/components/StationIcons/IconHolder.jsx";
import station from "/src/utils/station.js";
import cursor from "/src/assets/cursor.svg";
import "/src/css/game-instructions/slide-1.css";

function SlideOne() {
  const exampleSigns = ["Shimbashi", "Yurakucho", "Tokyo"];

  
  useEffect(() => {
    function scaleCursorAnimation() {
      const signsContainer = document.querySelector('.example-signs');

      if (signsContainer) {
        let width = signsContainer.offsetWidth;
        let height = signsContainer.offsetHeight;
        let fullWidth = window.innerWidth > 1000 ? 1000 : window.innerWidth;

        document.documentElement.style.setProperty('--fake-cursor-translate-x', (width * 0.6 + "px"));
        document.documentElement.style.setProperty('--fake-cursor-translate-y', (height * 0.80 + "px"));
        document.documentElement.style.setProperty('--example-signs-left', (fullWidth / 2 - (signsContainer.offsetWidth *0.40) + "px"));
      }
    }

    window.addEventListener('resize', scaleCursorAnimation);

    scaleCursorAnimation();

    return () => {
      window.removeEventListener('resize', scaleCursorAnimation);
    };
  }, []);

  const arrows = document.querySelector('.example-arrows')

  return (
    <div className="slide slide-1">
        <div className="slide-instruction">To begin, click any station</div>
        <div className="example-signs-wrapper">
          <div className="example-signs">
            {exampleSigns.map((stat) => {
              return (
                <JRStationSign
                station={station(stat, yamanote)}
                pick={() => {}}
                key={uuidv4()}
                />
                );
              })}
              <div className="fake-cursor-container">
                <img src={cursor} alt="fake cursor" />
              </div>
          </div>
        </div>
        <div className="example-icon">
          <IconHolder>
            <JRIcon num={1} abr="TYO" lineAbr="JY"></JRIcon>
          </IconHolder>
        </div>
    </div>
  );
}

export default SlideOne;
