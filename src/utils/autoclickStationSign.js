import hyphenateString from "/src/utils/hyphenateString";
import clearStationSearchInput from "./clearStationSearchInput";

function autoClickStationSign(stat) {
    clearStationSearchInput();
    const sign = document.querySelector(`.${hyphenateString(stat)}-sign`);
    sign.click();
}

export default autoClickStationSign;