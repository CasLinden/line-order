import { useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStyleIcon from "./JRStyleIcon";
import station from "/src/utils/station";
import { v4 as uuidv4 } from "uuid";
import "/src/css/picked-stations.css";

function PickedStations({ pickedStations }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  return (
    <div className="picked-stations">
      {pickedStations.map((stat) => {
        let currentStat = station(stat, currentLine);
        let abr = currentLine.main[stat];
        return (
          <JRStyleIcon
            key={uuidv4()}
            num={currentStat.num}
            abr={abr ? abr : null}
          />
        );
      })}
    </div>
  );
}

export default PickedStations;
