import arrowLeft from '/src/assets/arrow-left.svg'

function PrevSlideBtn ({slideIn}) {
    return (
        <button onClick={slideIn} className="prev-slide-btn slide-controls">
            <img className='prev-slide-icon' src={arrowLeft} alt="arrow pointing left" />
            GO BACK
        </button>
    )
}

export default PrevSlideBtn