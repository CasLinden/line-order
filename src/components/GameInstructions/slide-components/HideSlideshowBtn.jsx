import arrowLeft from '/src/assets/general-icons/arrow-left.svg'

function PrevSlideBtn ({hide}) {

    const handleButtonClick = () => {
        hide()
    }
    return (
        <button onClick={handleButtonClick} className="prev-slide-btn slide-controls hide-slideshow-btn">
            <img className='prev-slide-icon' src={arrowLeft} alt="arrow pointing left" />
            HIDE THIS
        </button>
    )
}

export default PrevSlideBtn