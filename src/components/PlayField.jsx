import GameInstructions from "/src/components/GameInstructions/GameInstructions.jsx"
import StationIconsContainer from "/src/components/StationIcons/StationIconsContainer.jsx";
import Arrows from "/src/components/Arrows.jsx"
import "/src/css/playfield.css";

function Playfield({ pickedStations, goBackwards, farLeft, farRight, children }) {

  return (
    <div className="playfield">
      {pickedStations && pickedStations.length === 0 ? (
        <GameInstructions />
      ) : (
        <div className="picked-stations-container">
          {farLeft === false && (
            <Arrows goBackwards={goBackwards} bool={true}></Arrows>
          )}

          <StationIconsContainer pickedStations={pickedStations} />

          {farRight === false && (
            <Arrows goBackwards={goBackwards} bool={false}></Arrows>
          )}

        </div>
        
      )}
      {children}
    </div>
  );
}

export default Playfield;
