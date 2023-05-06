import { useState, useContext, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import loopBackwards from "/src/utils/loopBackwards";
import loopForwards from "/src/utils/loopForwards";
import stationIndex from "/src/utils/stationIndex";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";
import toggleDirectionArrowsCss from "../utils/toggleDirectionArrowsCss";
import clearStationSearchInput from "/src/utils/clearStationSearchInput";

function Game() {
  const { currentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [goingBackwards, setGoingBackwards] = useState(null);

  useEffect(() => {
    setPickedStations([]);
  }, [currentLine]);

  const isCorrect = (station) => {
    if (pickedStations.length === 0) return true; // first station
    const nextIndex = nextStationIndex();
    const pickIndex = stationIndex(station, currentLine);
    if (goingBackwards === null && allowUserIntendedStartingDirection(pickIndex)) {
      return true;
    }
    if (nextIndex === pickIndex) return true;
    return false;
  };

  const pickStation = (station, removeStation) => {
    if (isCorrect(station)) {
      updatePickedStations(station);
      removeStation(station);
      clearStationSearchInput();
    } else {
      // logic for life-loss or something goes here
    }
  };

  const appendToPickedStations = (station) => {
    setPickedStations([...pickedStations, station]);
  };
  
  const prependToPickedStations = (station) => {
    setPickedStations([station, ...pickedStations]);
  };

  const updatePickedStations = (station) => {
    if(pickedStations.length === 1 && goingBackwards === null) {
      updateWithUserIntendedDirection(station)
      return
    }
    if (!goingBackwards) {
      appendToPickedStations(station);
    } else {
      prependToPickedStations(station);
    }
  };

  const updateWithUserIntendedDirection = (station) => {
    const startingStationIndex = stationIndex(pickedStations[0], currentLine);
    const pickedStationIndex = stationIndex(station, currentLine);
    const diff = startingStationIndex - pickedStationIndex;
    if (diff === 1){
      prependToPickedStations(station)
      goBackwards(true)
      return 
    } else if (diff === -1){
      appendToPickedStations(station)
      goBackwards(false)
      return
    } else if (diff < -1){
      const timeToLoop = loopBackwards(startingStationIndex, currentLine)
      if (pickedStationIndex === timeToLoop) {
        prependToPickedStations(station)
        goBackwards(true)
        return
      }
    } else if (diff > 1){
      const timeToLoop = loopForwards(startingStationIndex, currentLine)
      if (pickedStationIndex === timeToLoop) {
      appendToPickedStations(station)
      goBackwards(false)
    }
  };
}

  const goBackwards = (booli) => {
    setGoingBackwards(booli);
    toggleDirectionArrowsCss(booli);
  };

  const allowUserIntendedStartingDirection = (pickIndex) => {
    if (pickedStations.length !== 1) return false;
    const currentIndex = stationIndex(pickedStations[0], currentLine);
    let forwards =
      currentIndex === currentLine.EN.length - 1 ? 1 : currentIndex + 1;
    let backwards =
      currentIndex === 1
        ? loopBackwards(currentIndex, currentLine)
        : currentIndex - 1;
    if (backwards === pickIndex) {
      goBackwards(true);
      return true;
    } else if (forwards === pickIndex) {
      goBackwards(false);
      return true;
    } else {
      return false;
    }
  };

  const nextStationIndex = () => {
    let currentIndex;
    if (!goingBackwards) {
      currentIndex = stationIndex(
        pickedStations[pickedStations.length - 1],
        currentLine
      );
      const timeToLoop = loopForwards(currentIndex, currentLine);
      if (timeToLoop) {
        return timeToLoop;
      } else {
        return currentIndex + 1;
      }
    } else {
      currentIndex = stationIndex(pickedStations[0], currentLine);
      const timeToLoop = loopBackwards(currentIndex, currentLine);
      if (timeToLoop) {
        return timeToLoop;
      } else {
        return currentIndex - 1;
      }
    }
  };

  return (
    <>
      <PickedStations
        pickedStations={pickedStations}
        goingBackwards={goingBackwards}
        goBackwards={goBackwards}
      />
      <AvailableStations pickStation={pickStation} />
    </>
  );
}

export default Game;