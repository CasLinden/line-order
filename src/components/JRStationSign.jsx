import "/src/css/jr-station-sign.css";

function JRStationSign() {
  return (
    <div className="sign">
      <div className="top-section">
        <div className="icon-container"></div>
        <div className="station-name">
          <div className="main-station-title">
            <div>神</div>
            <div>田</div>
          </div>
          <div className="hiragana">かんだ</div>
        </div>
        <div className="right-of-station-title">
          <div className="translations">
            <div className="chinese">神田</div>
            <div className="korean">칸다</div>
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
      <div className="station-romaji">Kanda</div>
    </div>
  );
}

export default JRStationSign;
