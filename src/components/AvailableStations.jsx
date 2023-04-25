import { useState, useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStationSign from "./JRStationSign";
import station from "/src/utils/station";
import shuffleArray from "/src/utils/fisherYates";
import { v4 as uuidv4 } from "uuid";
import "/src/css/available-stations.css";

function AvailableStations({ pickStation }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [query, setQuery] = useState("");
  const [unPickedStations, setUnPickedStations] = useState(
    shuffleArray(currentLine.EN.slice())
  );
  // const [unPickedStations, setUnPickedStations] = useState(currentLine.EN);
  
  const removeStation = (station) => {
    setUnPickedStations(unPickedStations.filter((stat) => stat !== station));
  };

  const processPick = (station) => {
    pickStation(station);
    removeStation(station);
  };

  const filteredUnPickedStations = unPickedStations.filter((stat) => {
    return (
      stat.toLowerCase().includes(query.toLocaleLowerCase()) ||
      station(stat, currentLine).JP.includes(query) ||
      station(stat, currentLine).HR.includes(query)
    );
  });

  return (
    <div className="available-stations">
      <input
        className="station-search"
        placeholder={"Search..."}
        onFocus={(e) => {
          e.target.value = "";
          setQuery("");
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <div className="available-stations-signs">
        {filteredUnPickedStations.map((stat) => {
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
    </div>
  );
}

export default AvailableStations;
