import "/src/css/station-icons/default-station-icon.css";
import stationImageNegative from "/src/assets/general-icons/station-negative.svg";

function DefaultIcon({ num, abr }) {
        return (
            <div className="picked-station-icon default-station-icon">
                <img src={stationImageNegative} alt="" />
            </div>
        )
}

export default DefaultIcon;