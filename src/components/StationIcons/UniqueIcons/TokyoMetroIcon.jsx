import "/src/css/station-icons/tokyo-metro-icon.css";

function TokyoMetroIcon({ num, lineAbr }) {
  return (
        <div className="picked-station-icon tokyo-metro-icon">
          <div className="line-abreviation">{lineAbr}</div>
          <div className="station-number">{num}</div>
        </div>
  );
}

export default TokyoMetroIcon;
