import { useState } from "react";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";

function Game() {
  const [pickedStations, setPickedStations] = useState([]);

  const checkPick = (station) => {
    console.log(`checking if ${station} is nextStation`)
  }

const pickStation = (station) => {
  checkPick(station);
}

  return (
    <>
      <PickedStations />
      <AvailableStations pickStation={(station) => {pickStation(station)}}/>
    </>
)
}

export default Game;
