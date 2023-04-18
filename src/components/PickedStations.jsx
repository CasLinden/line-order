import { useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStyleIcon from "./JRStyleIcon";
import IconHolder from "./IconHolder";
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
            <IconHolder  key={uuidv4()} stationTitle={currentStat.JP}>
              <JRStyleIcon
                num={currentStat.num}
                abr={abr ? abr : null}
              />
            </IconHolder>
        );
      })}
    </div>
  );
}

export default PickedStations;
