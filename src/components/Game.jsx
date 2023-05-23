import { useState, useContext, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import loopBackwards from "/src/utils/loopBackwards";
import loopForwards from "/src/utils/loopForwards";
import stationIndex from "/src/utils/stationIndex";
import PlayField from "/src/components/PlayField";
import AvailableStations from "/src/components/AvailableStations";
import toggleDirectionArrowsCss from "/src/utils/toggleDirectionArrowsCss";
import clearStationSearchInput from "/src/utils/clearStationSearchInput";
import {
  addClassForCorrectAnimation,
  addClassForIncorrectAnimation,
  removeClassForIncorrectAnimation,
} from "/src/utils/pickAnimations";
import { railClatterSound } from "/src/utils/railClatterSound";

function Game() {
  const { currentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [goingBackwards, setGoingBackwards] = useState(null);
  const [farLeft, setFarLeft] = useState(false);
  const [farRight, setFarRight] = useState(false);

  useEffect(() => {
    setPickedStations([]);
    setGoingBackwards(null);
    setFarLeft(false);
    setFarRight(false);
  }, [currentLine]);

  const isCorrect = (station) => {
    if (pickedStations.length === 0) return true; // first station
    const nextIndex = nextStationIndex();
    const pickIndex = stationIndex(station, currentLine);
    if (
      goingBackwards === null &&
      allowUserIntendedStartingDirection(pickIndex)
    ) {
      return true;
    }
    if (nextIndex === pickIndex) return true;
    return false;
  };

  const pickStation = (station, removeStation) => {
    if (isCorrect(station)) {
      addClassForCorrectAnimation(station);
      railClatterSound.play();
      setTimeout(() => {
        passCorrectStation(station, removeStation);
        endOfLine(station);
      }, "400");
    } else {
      addClassForIncorrectAnimation(station);
      setTimeout(() => {
        removeClassForIncorrectAnimation(station);
      }, "400");
    }
  };

  const passCorrectStation = (station, removeStation) => {
    updatePickedStations(station);
    removeStation(station);
    clearStationSearchInput();
  };

  const appendToPickedStations = (station) => {
    setPickedStations([...pickedStations, station]);
  };

  const prependToPickedStations = (station) => {
    setPickedStations([station, ...pickedStations]);
  };

  const updatePickedStations = (station) => {
    if (pickedStations.length === 1 && goingBackwards === null) {
      updateWithUserIntendedDirection(station);
      return;
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
    if (diff === 1) {
      prependToPickedStations(station);
      goBackwards(true);
      return;
    } else if (diff === -1) {
      appendToPickedStations(station);
      goBackwards(false);
      return;
    } else if (diff < -1) {
      const timeToLoop = loopBackwards(startingStationIndex, currentLine);
      if (pickedStationIndex === timeToLoop) {
        prependToPickedStations(station);
        goBackwards(true);
        return;
      }
    } else if (diff > 1) {
      const timeToLoop = loopForwards(startingStationIndex, currentLine);
      if (pickedStationIndex === timeToLoop) {
        appendToPickedStations(station);
        goBackwards(false);
      }
    }
  };

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

  const endOfLine = (station) => {
    if (currentLine.loop) return;
    if (station === currentLine.EN[0]) {
      goBackwards(false);
      setFarLeft(true);
    } else if (station === currentLine.EN[currentLine.EN.length - 1]) {
      goBackwards(true);
      setFarRight(true);
    }
  };

  return (
    <>
      <PlayField
        pickedStations={pickedStations}
        goingBackwards={goingBackwards}
        goBackwards={goBackwards}
        farLeft={farLeft}
        farRight={farRight}
      />
      <AvailableStations pickStation={pickStation} />
    </>
  );
}

export default Game;
