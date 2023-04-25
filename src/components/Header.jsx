import "/src/css/header.css";
import train from "/src/assets/train.svg";

export default function Header() {
  const defaultCity = "Tokyo";
  const defaultLine = "Yamanote";
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-train-image" src={train} alt="" />
        <div className="site-title">
            <div className="line">Line</div><div className="legend">Legend</div>
        </div>
      </div>

      <div className="header-right">
        <div className="city">{defaultCity}</div>
        <div className="line">{defaultLine}</div>
      </div>
    </header>
  );
}
