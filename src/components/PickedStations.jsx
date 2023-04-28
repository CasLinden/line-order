import { useContext, useRef, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import JRStyleIcon from "./JRStyleIcon";
import toggleDirectionArrowsCss from "/src/utils/toggleDirectionArrowsCss";
import IconHolder from "./IconHolder";
import station from "/src/utils/station";
import { v4 as uuidv4 } from "uuid";
import arrows from "/src/assets/arrows.svg";
import "/src/css/picked-stations.css";

function PickedStations({ pickedStations, goBackwards, setGoingBackwards }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const backwardsRef = useRef(null);
  const forwardsRef = useRef(null);


  // const handleBackwardsArrowClick = () => {
  //   setGoingBackwards(true);
  //   forwardsRef.current.classList.add("inactive-arrow-container");
  //   backwardsRef.current.classList.remove("inactive-arrow-container");
  // }

  // const handleForwardsArrowClick = () => {
  //   setGoingBackwards(false);
  //   forwardsRef.current.classList.remove("inactive-arrow-container");
  //   backwardsRef.current.classList.add("inactive-arrow-container");
  // }

  return (
    <>
      {pickedStations && pickedStations.length === 0 ? (
        <div className="picked-stations-placeholder">
          <span>Pick a station to depart from</span>
          <span>出発駅を選択してください</span>
        </div>
      ) : (
        <div className="picked-stations-container">
          <div className="backwards-arrows-container" ref={backwardsRef}>
            <img className="backwards-arrows" onClick={() => {
              toggleDirectionArrowsCss(true) 
              goBackwards(true)}
              } src={arrows}></img>
          </div>
          {pickedStations.map((stat) => {
            let currentStat = station(stat, currentLine);
            let abr = currentLine.main[stat];
            return (
              <IconHolder key={uuidv4()} stationTitle={currentStat.JP}>
                <JRStyleIcon num={currentStat.num} abr={abr ? abr : null} />
              </IconHolder>
            );
          })}
          <div className="forwards-arrows-container" ref={forwardsRef}>
            <img className="forwards-arrows" onClick={() => {
              toggleDirectionArrowsCss(false) 
              goBackwards(false)}
              } src={arrows}></img>
          </div>
        </div>
      )}
    </>
  );
}

export default PickedStations;