import "/src/css/station-signs/default-station-sign.css";
import stationImage from "/src/assets/station.svg";
import hyphenateString from "/src/utils/hyphenateString";
import { v4 as uuidv4 } from "uuid";

function DefaultStationSign({ station, pick }) {

  return (
    <div className={`sign default-sign ${hyphenateString(station.EN)}-sign`} onClick={() => pick()}>
        <img className="station-image" src={stationImage} alt="" />
        <div className="title">{station.EN}</div>
    </div>
  );
}

export default DefaultStationSign;
