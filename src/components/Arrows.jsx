import { useRef } from "react";
import arrows from "/src/assets/arrows.svg";

function Arrows ({goBackwards, bool}) {
    const backwardsRef = useRef(null);
    const forwardsRef = useRef(null);
    
    if (bool === true){
        return (
            <div
            className={`backwards-arrows-container arrows-container`}
            // ref={backwardsRef}
          >
            <img
              className={`backwards-arrows`}
              onClick={() => {
                goBackwards(true);
              }}
              src={arrows}
            ></img>
          </div>
        )
    } else {
    return (
        <div
        className={`forwards-arrows-container arrows-container`}
        // ref={forwardsRef}
      >
        <img
          className={`forwards-arrows`}
          onClick={() => {
            goBackwards(false);
          }}
          src={arrows}
        ></img>
      </div>
    )
    }
}

export default Arrows