function loopBackwards (currentIndex, currentLine) {
    if (currentLine.loop === true && currentIndex === 1){
        return currentLine.EN.length;
    } 
    // if (currentIndex === currentLine.EN.length) {
    //     return 1 
    // }
    return false
}

export default loopBackwards;