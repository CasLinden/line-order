function alterTransitionValue(element, duration = 0) {
    const transition = window.getComputedStyle(element).transition;
    console.log(typeof transition, transition)
    const transitionDuration = window.getComputedStyle(element).transitionDuration;
    const transitionDurationInSeconds = parseFloat(transitionDuration);
  
    if (isNaN(transitionDurationInSeconds)) {
      return;
    }

    const alterDurationInMilliseconds = duration * 1000
    const transitionDurationInMilliseconds = transitionDurationInSeconds * 1000;
    if (alterDurationInMilliseconds > transition) {
      transitionDurationInMilliseconds = alterDurationInMilliseconds
    }
  
    element.style.transition = `${duration}s`;

    setTimeout(() => {
      element.style.transition = transition;
    }, transitionDurationInMilliseconds + 10);
  }
  
  export default alterTransitionValue;