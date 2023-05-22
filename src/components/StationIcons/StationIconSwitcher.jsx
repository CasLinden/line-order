import JRIcon from './UniqueIcons/JRIcon'
import DefaultStationIcon from "./UniqueIcons/DefaultStationIcon";
import "/src/css/station-icons/default-station-icon.css";

function StationIconSwitcher({ num, abr, group, key }) {
    switch (group) {
      case "JR":
        return <JRIcon num={num} abr={abr} key={key}/>;
      default:
        document.documentElement.style.setProperty(
          "--currentline-color",
          `${'#FFFFFF'}`
        );
        return <DefaultStationIcon/>;
    }
  }
  
  export default StationIconSwitcher