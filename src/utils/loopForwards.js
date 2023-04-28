function loopForwards (currentIndex, currentLine) {
    if (currentLine.loop === true && currentIndex === currentLine.EN.length){
        return 1
    } 
    return false
}

export default loopForwards;