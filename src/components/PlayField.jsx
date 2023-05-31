import { useRef } from "react";
import GameInstructions from "/src/components/GameInstructions/GameInstructions.jsx"
import StationIconsContainer from "/src/components/StationIcons/StationIconsContainer.jsx";
import arrows from "/src/assets/arrows.svg";
import Arrows from "/src/components/Arrows.jsx"
import "/src/css/playfield.css";

function Playfield({ pickedStations, goBackwards, farLeft, farRight, children }) {
  const backwardsRef = useRef(null);
  const forwardsRef = useRef(null);

  return (
    <div className="playfield">
      {pickedStations && pickedStations.length === 0 ? (
        <GameInstructions/>
      ) : (
        <div className="picked-stations-container">
          {farLeft === false && (
            <Arrows goBackwards={goBackwards} bool={true}></Arrows>
            // <div
            //   className={`backwards-arrows-container arrows-container`}
            //   ref={backwardsRef}
            // >
            //   <img
            //     className={`backwards-arrows`}
            //     onClick={() => {
            //       goBackwards(true);
            //     }}
            //     src={arrows}
            //   ></img>
            // </div>
          )}

          <StationIconsContainer pickedStations={pickedStations} />

          {farRight === false && (
            <Arrows goBackwards={goBackwards} bool={false}></Arrows>
            // <div
            //   className={`forwards-arrows-container arrows-container`}
            //   ref={forwardsRef}
            // >
            //   <img
            //     className={`forwards-arrows`}
            //     onClick={() => {
            //       goBackwards(false);
            //     }}
            //     src={arrows}
            //   ></img>
            // </div>
          )}

        </div>
        
      )}
      {children}
    </div>
  );
}

export default Playfield;
