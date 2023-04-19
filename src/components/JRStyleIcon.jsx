import "/src/css/jr-style-icon.css";

function JRStyleIcon({ num, abr }) {
    // if (abr) {
        return (
            <div className="picked-station">
                <div className="main-station" style={{ background: abr ? 'black' : 'none' }}>
                    <span className="outer-title">{abr}</span>
                    <span className="station-icon">
                        <span className="JY">JY</span>
                        <span className="station-number">{num}</span>
                    </span>
                </div>
            </div>
        )
}

export default JRStyleIcon;
