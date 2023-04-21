import { useState, useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import loopBackwards from "/src/utils/loopBackwards";
import stationIndex from "../utils/stationIndex";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";

function Game() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [lastPickedStation, setLastPickedStation] = useState(null);
  let goingBackwards = false;

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

  const pickStation = (station) => {
    if (checkPick(station)) {
      setPickedStations([...pickedStations, station]);
      setLastPickedStation(station);
    } else {
      alert("Wrong station! Try again.");
    }
  };

  const allowUserIntendedStartingDirection = (pickIndex) => { //user might intend to go goingBackwards, which this function allows
    let forwards 
    let backwards
    if (!goingBackwards){
      goingBackwards = true 
      backwards = nextStationIndex()
    }
    goingBackwards = false 
    forwards = nextStationIndex()
    if (backwards === pickIndex) {
      goingBackwards = true
      return true 
    } else if (forwards === pickIndex) {
      return true 
    } else {  
      return false
    }
  };

  const nextStationIndex = () => {
    const currentIndex = stationIndex(lastPickedStation, currentLine);
    if (!goingBackwards) { 
      return currentIndex + 1;
    } else {
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
      <PickedStations pickedStations={pickedStations} />
      <AvailableStations pickStation={pickStation} />
    </>
  );
}

export default Game;