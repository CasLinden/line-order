import { useState, useContext, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import StationSignSwitcher from "./StationSigns/StationSignSwitcher";
import station from "/src/utils/station";
import shuffleArray from "/src/utils/fisherYates";
import { v4 as uuidv4 } from "uuid";
import "/src/css/available-stations.css";

function AvailableStations({ pickStation, pickedStations }) {
  const { currentLine } = useContext(CurrentLineContext);
  const [query, setQuery] = useState("");
  const [unPickedStations, setUnPickedStations] = useState(
    shuffleArray(currentLine.EN.slice())
  );

  useEffect(() => {
    setUnPickedStations(shuffleArray(currentLine.EN.slice()));
  }, [currentLine]);

  useEffect(() => {
    if (pickedStations.length === 0) {
      setUnPickedStations(shuffleArray(currentLine.EN.slice()));
    }
  }, [pickedStations]);

  const removeStation = (station) => {
    setUnPickedStations(unPickedStations.filter((stat) => stat !== station));
  };

  const processPick = (station) => {
    pickStation(station, removeStation);
  };

  const filteredUnPickedStations = unPickedStations.filter((stat) => {
    const stationObj = station(stat, currentLine);
    return (
      stat.toLowerCase().includes(query.toLocaleLowerCase()) ||
      stationObj?.JP?.includes(query) ||
      stationObj?.HR?.includes(query)
    );
  });

  return (
    
      <div className="available-stations">
        <div className="fifty-fifty-bar">
          <div className="search-container">
            <input
              className="search"
              placeholder={"Search..."}
              onFocus={(e) => {
                e.target.value = "";
                setQuery("");
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
            />
          </div>
        </div>
        <div className="border-provider">
          <div className="available-stations-signs">
              {filteredUnPickedStations.map((stat) => {
                return (
                    <StationSignSwitcher
                      station={station(stat, currentLine)}
                      key={uuidv4()}
                      pick={() => {
                        processPick(stat);
                      }}
                      group={currentLine.group}
                    />
                );
              })}
          </div>
        </div>
      </div>
  );
}

export default AvailableStations;