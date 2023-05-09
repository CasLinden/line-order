import { useContext, useRef} from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import StationIconSwitcher from "./StationIcons/StationIconSwitcher";
import IconHolder from "./StationIcons/IconHolder";
import station from "/src/utils/station";
import { v4 as uuidv4 } from "uuid";
import arrows from "/src/assets/arrows.svg";
import "/src/css/picked-stations.css";

function PickedStations({ pickedStations, goBackwards}) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const backwardsRef = useRef(null);
  const forwardsRef = useRef(null);


  return (
    <>
      {pickedStations && pickedStations.length === 0 ? (
        <div className="picked-stations-placeholder">
          <span>Choose place of departure</span>
          <span>出発駅を選択してください</span>
        </div>
      ) : (
        <div className="picked-stations-container">
          <div className="backwards-arrows-container" ref={backwardsRef}>
            <img className="backwards-arrows" onClick={() => {
              goBackwards(true)}
              } src={arrows}></img>
          </div>
          {pickedStations.map((stat) => {
            let currentStat = station(stat, currentLine);
            let abr = currentLine.main[stat];
            return (
              <IconHolder key={uuidv4()} stationTitle={currentStat.JP ? currentStat.JP : currentStat.EN}>
                <StationIconSwitcher num={currentStat.num} abr={abr ? abr : null} group={currentLine.group}/>
              </IconHolder>
            );
          })}
          <div className="forwards-arrows-container" ref={forwardsRef}>
            <img className="forwards-arrows" onClick={() => {
              goBackwards(false)}
              } src={arrows}></img>
          </div>
        </div>
      )}
    </>
  );
}

export default PickedStations;