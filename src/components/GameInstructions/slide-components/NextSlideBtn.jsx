import arrowRight from '/src/assets/arrow-right.svg'
import hyphenateString from "/src/utils/hyphenateString";

function NextSlideBtn ({slideIn, text}) {
    return (
        <button onClick={slideIn} className={`next-slide-btn slide-controls ${hyphenateString(text)}`}>     
            {text}
            <img className='next-slide-icon' src={arrowRight} alt="arrow pointing right" />
        </button>
    )
}

export default NextSlideBtn