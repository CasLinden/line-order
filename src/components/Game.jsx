import { useState, useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import loopBackwards from "/src/utils/loopBackwards";
import loopForwards from "/src/utils/loopForwards";
import stationIndex from "/src/utils/stationIndex";
import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";
import toggleDirectionArrowsCss from "../utils/toggleDirectionArrowsCss";

function Game() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [goingBackwards, setGoingBackwards] = useState(false);

  const checkPick = (station) => {
    if (pickedStations.length === 0) return true; // first station
    const nextIndex = nextStationIndex();
    const pickIndex = stationIndex(station, currentLine);
    if (allowUserIntendedStartingDirection(pickIndex)) {
      return true;
    }
    if (nextIndex === pickIndex) return true;
    return false;
  };

  const pickStation = (station, removeStation) => {
    if (checkPick(station)) {
      updatePickedStations(station);
      removeStation(station);
    } else {
      alert("Wrong station! Try again.");
    }
  };

  const goBackwards = (booli) => {
    setGoingBackwards(booli)
    toggleDirectionArrowsCss(booli)
  }

  const updatePickedStations = (station) => {
    if (goingBackwards) {
      setPickedStations([station, ...pickedStations]);
    } else {
      setPickedStations([...pickedStations, station]);
    }
  };

  const allowUserIntendedStartingDirection = (pickIndex) => {
    //user might intend to go goingBackwards, which this function allows
    const currentIndex = stationIndex(pickedStations[0], currentLine);
    let forwards =
      currentIndex === currentLine.EN.length - 1 ? 1 : currentIndex + 1;
    let backwards =
      currentIndex === 1
        ? loopBackwards(currentIndex, currentLine)
        : currentIndex - 1;
    if (backwards === pickIndex) {
      goBackwards(true)
      return true;
    } else if (forwards === pickIndex) {
      goBackwards(false)
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