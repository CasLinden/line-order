import JRIcon from "/src/components/StationIcons/UniqueIcons/JRIcon.jsx";
import IconHolder from "/src/components/StationIcons/IconHolder.jsx";
import station from "/src/utils/station.js";
import Arrows from "/src/components/Arrows.jsx"
import cursor from "/src/assets/general-icons/cursor.svg";
import "/src/css/game-instructions/slide-3.css";

function SlideThree() {
  return (
    <div className="slide slide-3">
      <div className="slide-instruction">Now keep going that way,</div>
      <div className="example-icon">
        <IconHolder>
          <JRIcon num={2} abr="KND" lineAbr="JY" ></JRIcon>
        </IconHolder>
        <div className="fake-cursor-container">
          <img src={cursor} alt="fake cursor" />
        </div>
        <div className="example-arrows">
            <Arrows goBackwards={() => console.log('fake arrow does nothing')} bool={true}></Arrows>
            <Arrows goBackwards={() => console.log('fake arrow does nothing')} bool={false}></Arrows>
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
