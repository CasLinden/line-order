 
 export default function IconHolder({stationTitle, children}){

    return (
        <div className="icon-holder">
            {children}
            <div className="station-icon-title">{stationTitle}</div>
        </div>
    )
}