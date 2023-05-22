import { useContext} from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import StationIconSwitcher from "/src/components/StationIcons/StationIconSwitcher";
import IconHolder from "/src/components/StationIcons/IconHolder";
import station from "/src/utils/station";
import { v4 as uuidv4 } from "uuid";

function StationIcon({stat}) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  let currentStat = station(stat, currentLine);
  let abr = currentLine.main[stat];

  return (
    <IconHolder
      key={uuidv4()}
      stationTitle={currentStat.JP ? currentStat.JP : currentStat.EN}
      farLeftIcon={currentLine.loop === false && stat === currentLine.EN[0]? true : false}
      farRightIcon={currentLine.loop === false && stat === currentLine.EN[currentLine.EN.length - 1]? true : false}
    >
      <StationIconSwitcher
        num={currentStat.num}
        abr={abr ? abr : null}
        group={currentLine.group}
      />
    </IconHolder>
  );
}

export default StationIcon;
