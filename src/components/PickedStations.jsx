import JRStyleIcon from './JRStyleIcon';


function PickedStations ({pickedStations}) {
return(
    <div className="picked-stations">
        {pickedStations.map((station) => {
            
            return <JRStyleIcon station={station} key={station} />
        }   
        )}
    </div>

)

}

export default PickedStations;