 
 export default function IconHolder({stationTitle, children, farLeftIcon, farRightIcon}){
    const classNames = `icon-holder ${farLeftIcon ? 'far-left-icon' : ''} ${farRightIcon ? 'far-right-icon' : ''}`
    
    
    return (
        <div className={classNames}>
            {children}
            <div className="station-icon-title">{stationTitle}</div>
        </div>
    )
}