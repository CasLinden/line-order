import "/src/css/station-signs/tokyo-metro-sign.css";
import hyphenateString from "/src/utils/hyphenateString";
import TokyoMetroIcon from "/src/components/StationIcons/UniqueIcons/TokyoMetroIcon"
import { v4 as uuidv4 } from "uuid";

function TokyoMetroSign({ station, pick }) {
  return (
    <div
      className={`sign tokyo-metro-sign ${hyphenateString(station.EN)}-sign`}
      onClick={() => pick()}
    >
      <div className="top-section">
        <div className="station-name">
          <div className="main-station-title japanese">
            {typeof station.JP === "string" &&
              station.JP.split("").map((kanji) => {
                return <div key={uuidv4()}>{kanji}</div>;
              })}
          </div>
          <div className="hiragana japanese">{station.HR}</div>
          <div className="station-romaji">{station.EN}</div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="icon-container">
            <TokyoMetroIcon lineAbr={station.lineAbr} num="00"></TokyoMetroIcon>
        </div>
      </div>
    </div>
  );
}

export default TokyoMetroSign;
