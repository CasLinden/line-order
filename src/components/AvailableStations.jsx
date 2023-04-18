import { useState, useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStationSign from "./JRStationSign";
import station from "/src/utils/station";
import shuffleArray from "/src/utils/fisherYates";
import { v4 as uuidv4 } from "uuid";

function AvailableStations({ pickStation }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [unPickedStations, setUnPickedStations] = useState(shuffleArray(currentLine.EN.slice()));

  const removeStation = (station) => {
    setUnPickedStations(unPickedStations.filter((stat) => stat !== station));
  };

  const processPick = (station) => {
    pickStation(station);
    removeStation(station);
  };
  


  return (
    <div className="available-stations">
      {unPickedStations.map((stat) => {
        return (
          <JRStationSign
            station={station(stat, currentLine)}
            key={uuidv4()}
            pick={() => {
              processPick(stat);
            }}
          />
        );
      })}
    </div>
  );
}

export default AvailableStations;
