import { LineNav } from "/src/components/header/LineNav.jsx";
import train from "/src/assets/train.svg";
import "/src/css/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="title-section">
        <img className="header-train-image" src={train} alt="" />
        <div className="site-title">
          <div className="line">Line</div>
          <div>Order</div>
        </div>
      </div>
      <LineNav></LineNav>
    </header>
  );
}
