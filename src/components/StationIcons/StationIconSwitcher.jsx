import JRIcon from './UniqueStationIcons/JRIcon'
import DefaultStationIcon from "./DefaultStationIcon";
import "/src/css/station-icons/default-station-icon.css";

import { v4 as uuidv4 } from "uuid";

function StationIconSwitcher({ num, abr, group }) {
    switch (group) {
      case "JR":
        return <JRIcon num={num} abr={abr}/>;
      default:
        return <DefaultStationIcon/>;
    }
  }
  
  export default StationIconSwitcher