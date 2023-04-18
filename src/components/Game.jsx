import { useState, useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import stationIndex from "../utils/stationIndex";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";

function Game() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [lastPickedStation, setLastPickedStation] = useState(null);
  const [counterClockWise, setCounterClockWise] = useState(false);

  const checkPick = (station) => {
    if (pickedStations.length === 0) return true; // first station
    const nextIndex = nextStationIndex();
    const pickIndex = stationIndex(station, currentLine)
    if (nextIndex === pickIndex) return true;
    return false
  };

  const pickStation = (station) => {
    if (checkPick(station)) {
      setPickedStations([...pickedStations, station]);
      setLastPickedStation(station);
    } else {
      alert("Wrong station! Try again.")
    }
  };

  const nextStationIndex = () => {
    const currentIndex = stationIndex(lastPickedStation, currentLine);
    if (counterClockWise) {
      return currentIndex - 1;
    } else {
      return currentIndex + 1;
    }
  };

  return (
    <>
      <PickedStations pickedStations={pickedStations} />
      <AvailableStations pickStation={pickStation} />
    </>
  );
}

export default Game;
