import { useState, useContext, useEffect} from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import loopBackwards from "/src/utils/loopBackwards";
import stationIndex from "../utils/stationIndex";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";

function Game() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [goingBackwards, setGoingBackwards]  = useState(false);

  const checkPick = (station) => {
    if (pickedStations.length === 0) return true; // first station
    const nextIndex = nextStationIndex();
    const pickIndex = stationIndex(station, currentLine);
    if(allowUserIntendedStartingDirection(pickIndex)){
      return true
    }
    if (nextIndex === pickIndex) return true;
    return false;
  };

  const pickStation = (station, removeStation) => {
    if (checkPick(station)) {
      updatePickedStations(station)
      removeStation(station);
    } else {
      alert("Wrong station! Try again.");
    }
  };

  const updatePickedStations = (station) => {
    if (goingBackwards) {
      setPickedStations([station, ...pickedStations]);
    } else {
      setPickedStations([...pickedStations, station]);
    }
  }

  const allowUserIntendedStartingDirection = (pickIndex) => { //user might intend to go goingBackwards, which this function allows
    const currentIndex = stationIndex(pickedStations[0], currentLine);
    let forwards = currentIndex + 1;
    let backwards = currentIndex === 1 ? loopBackwards(currentIndex, currentLine) : currentIndex - 1;
    if (backwards === pickIndex) {
      setGoingBackwards(true)
      return true 
    } else if (forwards === pickIndex) {
      return true 
    } else {  
      return false
    }
  };

  const nextStationIndex = () => {
    let currentIndex
    if (!goingBackwards) { 
      currentIndex = stationIndex(pickedStations[pickedStations.length-1], currentLine);
      return currentIndex + 1;
    } else {
      currentIndex = stationIndex(pickedStations[0], currentLine);
      const timeToLoop = loopBackwards(currentIndex, currentLine);
      if (timeToLoop) {
        return timeToLoop
      } else {
      return currentIndex - 1;
      }
    }
  };

  return (
    <>
      <PickedStations pickedStations={pickedStations} goingBackwards={goingBackwards} setGoingBackwards={setGoingBackwards} />
      <AvailableStations pickStation={pickStation} />
    </>
  );
}

export default Game;