import "/src/css/jr-station-sign.css";

function JRStationSign({station}) {
  const JP = station.JP;
  const kanjiArray = JP.split("");


  return (
    <div className="sign">
      <div className="top-section">
        <div className="icon-container"></div>
        <div className="station-name">
          <div className="main-station-title">
            {kanjiArray.map((kanji) => {
              console.log(kanji)
              return <div>{kanji}</div>;
            })}
          </div>
          <div className="hiragana">{station.HR}</div>
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
