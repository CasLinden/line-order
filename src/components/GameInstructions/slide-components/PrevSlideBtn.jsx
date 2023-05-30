import arrowLeft from '/src/assets/arrow-left.svg'

function PrevSlideBtn ({slide}) {
    return (
        <button onClick={slide} className="prev-slide-btn slide-controls">
            <img className='prev-slide-icon' src={arrowLeft} alt="arrow pointing left" />
            GO BACK
        </button>
    )
}

export default PrevSlideBtn