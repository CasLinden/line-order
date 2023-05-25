import { useRef } from "react";
import StationIconsContainer from "/src/components/StationIcons/StationIconsContainer.jsx";
import arrows from "/src/assets/arrows.svg";
import "/src/css/playfield.css";

function Playfield({ pickedStations, goBackwards, farLeft, farRight, children }) {
  const backwardsRef = useRef(null);
  const forwardsRef = useRef(null);

  return (
    <div className="playfield">
      {pickedStations && pickedStations.length === 0 ? (
        <div className="game-rules">
          <span>To choose a departure station, click a sign below</span>
          <span>
            以下の駅名のいずれかをクリックして、出発駅を選択して下さい。
          </span>
        </div>
      ) : (
        <div className="picked-stations-container">
          {farLeft === false && (
            <div
              className={`backwards-arrows-container arrows-container`}
              ref={backwardsRef}
            >
              <img
                className={`backwards-arrows`}
                onClick={() => {
                  goBackwards(true);
                }}
                src={arrows}
              ></img>
            </div>
          )}

          <StationIconsContainer pickedStations={pickedStations} />

          {farRight === false && (
            <div
              className={`forwards-arrows-container arrows-container`}
              ref={forwardsRef}
            >
              <img
                className={`forwards-arrows`}
                onClick={() => {
                  goBackwards(false);
                }}
                src={arrows}
              ></img>
            </div>
          )}

        </div>
        
      )}
      {children}
    </div>
  );
}

export default Playfield;
