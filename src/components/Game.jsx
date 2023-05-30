import { useState, useContext, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import Playfield from "/src/components/Playfield";
import AvailableStations from "/src/components/AvailableStations";
import GameStatusHUD from "/src/components/GameStatusHUD";
import loopBackwards from "/src/utils/loopBackwards";
import loopForwards from "/src/utils/loopForwards";
import stationIndex from "/src/utils/stationIndex";
import toggleDirectionArrowsCss from "/src/utils/toggleDirectionArrowsCss";
import clearStationSearchInput from "/src/utils/clearStationSearchInput";
import railClatterSound from "/src/utils/railClatterSound";
import autoClickStationSign from "../utils/autoclickStationSign";
import {
  addClassForCorrectAnimation,
  addClassForIncorrectAnimation,
  removeClassForIncorrectAnimation,
} from "/src/utils/pickAnimations";

function Game() {
  const { currentLine } = useContext(CurrentLineContext);
  const [pickedStations, setPickedStations] = useState([]);
  const [goingBackwards, setGoingBackwards] = useState(null);
  const [farLeft, setFarLeft] = useState(false);
  const [farRight, setFarRight] = useState(false);
  const [earnedTicketParts, setEarnedTicketParts] = useState(0); // 3 parts = 1 ticket
  
  const reset = () => {
    setPickedStations([]);
    setGoingBackwards(null);
    setFarLeft(false);
    setFarRight(false);
    setEarnedTicketParts(0);
  };
  
  useEffect(() => {
    reset();
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
      earnTicketPart();
      if (gameIsFinished()){
        console.log("game is finished");
      } else{
        console.log("game is not finished")
      }
      setTimeout(() => {
        passCorrectStation(station, removeStation);
        endOfLine(station);
      }, 400);
    } else {
      addClassForIncorrectAnimation(station);
      setTimeout(() => {
        removeClassForIncorrectAnimation(station);
      }, 400);
    }
  };

  const gameIsFinished = () => {
    if (pickedStations.length === currentLine.EN.length -1 ) { 
      console.log("game finished")      // -1 because setPicked is async
      return true;     
    }
  }

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

  const earnTicketPart = () => {
    setEarnedTicketParts(earnedTicketParts + 1);
  };

  const consumeTicket = () => {
    if ( earnedTicketParts < 3 || pickedStations.length === currentLine.EN.length) return;
      autoClickStationSign(currentLine.EN[nextStationIndex() - 1]);
      // setTimeout(() => {
      //   setEarnedTicketParts(earnedTicketParts - 3);
      // }, 400);
  };

  return (
    <>
      <Playfield
        pickedStations={pickedStations}
        goingBackwards={goingBackwards}
        goBackwards={goBackwards}
        farLeft={farLeft}
        farRight={farRight}
      >
        <GameStatusHUD
          consumeTicket={consumeTicket}
          earnedTicketParts={earnedTicketParts}
          reset={reset}
        />
      </Playfield>

      <AvailableStations
        pickStation={pickStation}
        pickedStations={pickedStations}
      />
    </>
  );
}

export default Game;