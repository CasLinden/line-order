import JRIcon from './UniqueStationIcons/JRIcon'
import DefaultStationIcon from "./DefaultStationIcon";
import "/src/css/station-icons/default-station-icon.css";

function StationIconSwitcher({ num, abr, group }) {
    switch (group) {
      case "JR":
        return <JRIcon num={num} abr={abr}/>;
      default:
        document.documentElement.style.setProperty(
          "--currentline-color",
          `${'#FFFFFF'}`
        );
        return <DefaultStationIcon/>;
    }
  }
  
  export default StationIconSwitcher