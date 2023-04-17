import JRStationSign from "./JRStationSign";
import { v4 as uuidv4 } from "uuid";
import yamanote from "/src/lines/yamanote";
import station from "/src/utils/station";
import { useState } from "react";

function AvailableStations({ pickStation }) {
  const [unPickedStations, setUnPickedStations] = useState(yamanote.EN);

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
            station={station(stat, yamanote)}
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
