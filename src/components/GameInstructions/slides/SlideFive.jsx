import "/src/css/game-instructions/slide-5.css";
import ticket from '/src/assets/ticket.svg';



function SlideFive(){

    return (
        <div className="slide slide-5">
            <div className="slide-instruction">
                Along the way, <br></br>you will earn tickets:
            </div>
            <div className="ticket-icon-container"><img src={ticket} alt="ticket icon" className="example-ticket-icon"/></div>
            <div className="slide-instruction-secondary">
                Spend tickets <br></br>to earn free stations.
            </div>
        </div>
    )
} 

export default SlideFive