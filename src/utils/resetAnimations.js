const  resetAnimations = (element) => {
  let children = element.getElementsByTagName("*");
    console.log(children)
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let style = window.getComputedStyle(child);
    if (style.animationName !== "none") {
      let currentAnimation = child.style.animation;
      child.style.animation = "none";
      void child.offsetHeight;
      child.style.animation = currentAnimation;
    }
  }
}

export default resetAnimations