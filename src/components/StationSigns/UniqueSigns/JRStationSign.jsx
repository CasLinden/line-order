import "/src/css/station-signs/jr-station-sign.css";
import hyphenateString from "/src/utils/hyphenateString";
import { v4 as uuidv4 } from "uuid";

function JRStationSign({ station, pick }) {

  return (
    <div className={`sign jr-sign ${hyphenateString(station.EN)}-sign`} onClick={() => pick()}>
      <div className="top-section">
        <div className="icon-container"></div>
        <div className="station-name">
          <div className="main-station-title japanese">
            {typeof station.JP === "string" &&
              station.JP.split("").map((kanji) => {
                return <div key={uuidv4()}>{kanji}</div>;
              })}
          </div>
          <div className="hiragana japanese">{station.HR}</div>
        </div>
        <div className="right-of-station-title">
          <div className="translations">
            {/* <div className="chinese">{station.CN}</div>
            <div className="korean">{station.KR}</div> */}
          </div>
          <div className="boxes">
            <div className="box-1">山</div>
            <div className="box-2">区</div>
          </div>
        </div>
      </div>
      <div className="green-bar">
        <div className="green-bar-left-edge"></div>
        <div></div>
        <div className="square"></div>
        <div></div>
        <div className="green-bar-right-edge"></div>
      </div>
      <div className="station-romaji">{station.EN}</div>
    </div>
  );
}

export default JRStationSign;
