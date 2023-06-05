import JRIcon from './UniqueIcons/JRIcon'
import TokyoMetroIcon from './UniqueIcons/TokyoMetroIcon';
import DefaultStationIcon from "./UniqueIcons/DefaultStationIcon";
import "/src/css/station-icons/default-station-icon.css";

function StationIconSwitcher({ num, abr, group, key, lineAbr }) {
  console.log(group)
    switch (group) {
      case "JR":
        return <JRIcon num={num} abr={abr} lineAbr={lineAbr} key={key}/>;
      case "Metro":
        return <TokyoMetroIcon num={num} lineAbr={lineAbr} ></TokyoMetroIcon>
      default:
        document.documentElement.style.setProperty(
          "--currentline-color",
          `${'#FFFFFF'}`
        );
        return <DefaultStationIcon/>;
    }
  }
  
  export default StationIconSwitcher