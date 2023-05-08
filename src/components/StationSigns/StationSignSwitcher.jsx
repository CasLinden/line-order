import JRStationSign from "./UniqueSigns/JRStationSign";
import DefaultStationSign from "/src/components/StationSigns/DefaultStationSign";

function StationSignSwitcher({ station, group, pick }) {
  switch (group) {
    case "JR":
      return <JRStationSign station={station} pick={pick}/>;
    default:
      return <DefaultStationSign station={station} pick={pick}/>;
  }
}

export default StationSignSwitcher;