import { useRef } from "react";
import StationIconsContainer from "/src/components/StationIcons/StationIconsContainer.jsx";
import arrows from "/src/assets/arrows.svg";
import "/src/css/picked-stations.css";

function PlayField({ pickedStations, goBackwards }) {
  const backwardsRef = useRef(null);
  const forwardsRef = useRef(null);

  return (
    <>
      {pickedStations && pickedStations.length === 0 ? (
        <div className="game-rules">
          <span>To choose a departure station, click a sign below</span>
          <span>
            以下の駅名のいずれかをクリックして、出発駅を選択して下さい。
          </span>
        </div>
      ) : (
        <div className="picked-stations-container">
          <div
            className={`backwards-arrows-container ${
              pickedStations.length === 1 ? "instruction1" : ""
            }`}
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

          <StationIconsContainer pickedStations={pickedStations} />

          <div
            className={`forwards-arrows-container ${
              pickedStations.length === 1 ? "instruction1" : ""
            } `}
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
        </div>
      )}
    </>
  );
}

export default PlayField;
