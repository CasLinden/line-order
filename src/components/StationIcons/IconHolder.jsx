 
 export default function IconHolder({stationTitle, children}){

    const classes = "nowrap station-icon-title"
    return (
        <div className="icon-holder">
            {children}
            <div className="station-icon-title">{stationTitle}</div>
        </div>
    )
}