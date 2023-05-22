import hyphenateString from "./hyphenateString";

function addClassForCorrectAnimation (station) {
    console.log(`.${hyphenateString(station)}-sign`)
    let statElement = document.querySelector(`.${hyphenateString(station)}-sign`);
    statElement.classList.add('correct-pick-animation');
}

function addClassForIncorrectAnimation (station) {
    let statElement = document.querySelector(`.${hyphenateString(station)}-sign`);
    statElement.classList.add('incorrect-pick-animation');
}

function removeClassForIncorrectAnimation (station) {
    let statElement = document.querySelector(`.${hyphenateString(station)}-sign`);
    statElement.classList.remove('incorrect-pick-animation');
}

export { addClassForCorrectAnimation, addClassForIncorrectAnimation, removeClassForIncorrectAnimation}