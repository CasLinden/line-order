import "/src/css/game-instructions/slide-6.css";

function SlideSix({hide}){

    const handleButtonClick = () => {
        hide()
    }

    return (
        <div className="slide slide-6">
            <div className="slide-instruction">
               <div className="slide-instruction"> Start by picking<br></br> your first station, <br></br> good luck!</div>
            </div>
               <button className="disable-instructions" onClick={handleButtonClick}>
                    Don't show slideshow again
               </button>
        </div>
    )
} 

export default SlideSix