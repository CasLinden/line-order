import "/src/css/game-instructions/slide-0.css";
import { useContext } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";

function SlideZero({instructionsHidden}){
    const { currentLine } = useContext(CurrentLineContext);

    return (
        <div className="slide slide-0">
            <div className="slide-instruction">
                Can you click all stations <br />
                {instructionsHidden && (
                    <>
                        on the {currentLine.title} <br />
                    </>
                )}
                in the right order?
            </div>
            {/* {instructionsHidden && (
                <button className="show-instructions" onClick={() => show()}>
                    Show me how
                </button>
            )} */}
        </div>
    )
} 

export default SlideZero