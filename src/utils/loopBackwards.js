function loopBackwards (currentIndex, currentLine) {
    if (currentLine.loop === true && currentIndex === 1){
        return currentLine.EN.length;
    } 
    return false
}

export default loopBackwards;