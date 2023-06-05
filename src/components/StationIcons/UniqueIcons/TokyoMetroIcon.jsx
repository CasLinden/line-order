import "/src/css/station-icons/tokyo-metro-icon.css";

function TokyoMetroIcon({ num, lineAbr }) {
  return (
        <div className="picked-station-icon tokyo-metro-icon">
          <span className="line-abreviation">{lineAbr}</span>
          <span className="station-number">{num}</span>
        </div>
  );
}

export default TokyoMetroIcon;
