import { useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStyleIcon from "./JRStyleIcon";
import IconHolder from "./IconHolder";
import station from "/src/utils/station";
import { v4 as uuidv4 } from "uuid";
import stationIndex from "/src/utils/stationIndex";
import "/src/css/picked-stations.css";

function PickedStations({ pickedStations }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);

  const indexSortedStations = pickedStations.map((stat) => stationIndex(stat, currentLine)).toSorted((a, b) => a - b).map((index) => currentLine.EN[index -1])
  return (
    <>
      {pickedStations && pickedStations.length === 0 ? (
        <div className="picked-stations-placeholder">
          <span>Pick a station to depart from</span>
          <span>出発駅を選択してください</span>
        </div>
      ) : (
        <div className="picked-stations">
          {indexSortedStations.map((stat) => {
            let currentStat = station(stat, currentLine);
            let abr = currentLine.main[stat];
            return (
              <IconHolder key={uuidv4()} stationTitle={currentStat.JP}>
                <JRStyleIcon num={currentStat.num} abr={abr ? abr : null} />
              </IconHolder>
            );
          })}
        </div>
      )}
    </>
  );
}

export default PickedStations;
