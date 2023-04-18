 export default function IconHolder({stationTitle, children}){

    const classes = "nowrap station-icon-title"
    return (
        <div className="icon-holder">
            {children}
            <span className={classes}>{stationTitle}</span>
        </div>
    )
}