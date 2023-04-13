import "/src/css/jr-style-icon.css";

function JRStyleIcon({ num, abr }) {
    if (abr) {
        return (
            <div className="picked-station">
                <div className="main-station">
                    <span className="outer-title">{abr}</span>
                    <span className="station-icon">
                        <span className="JY">JY</span>
                        <span className="station-number">{num}</span>
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="picked-station">
                <span className="station-icon">
                    <span className="JY">JY</span>
                    <span className="station-number">{num}</span>
                </span>
            </div>
        )
    }
}

export default JRStyleIcon;
