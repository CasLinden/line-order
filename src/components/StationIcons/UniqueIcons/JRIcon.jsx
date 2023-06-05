import "/src/css/station-icons/jr-icon.css";

function JRIcon({ num, abr, lineAbr }) {
        return (
            <div className="picked-station-icon">
                <div className="main-station" style={{ background: abr ? 'black' : 'none' }}>
                    <span className="outer-title">{abr}</span>
                    <span className="station-icon">
                        <span className="JY">{lineAbr}</span>
                        <span className="station-number">{num}</span>
                    </span>
                </div>
            </div>
        )
}

export default JRIcon;
