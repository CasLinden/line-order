import { CSSTransition } from 'react-transition-group';
import Arrows from "/src/components/Arrows";
import "/src/css/game-instructions/slide-2.css";

function SlideTwo(){

    return (
        <div className="slide slide-2">
            <div className="slide-instruction">Second pick has two options</div>
            <div className="example-arrows">
                <Arrows goBackwards={() => console.log('fake arrow does nothing')} bool={true}></Arrows>
                <Arrows goBackwards={() => console.log('fake arrow does nothing')} bool={false}></Arrows>
            </div>
        </div>
    )
} 

export default SlideTwo