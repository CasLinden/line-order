function getMaxIcons (isMobile){
    if (!isMobile) return null;

    const availableWidth = isMobile - 3 * 55;
    const iconsCount = Math.floor(availableWidth / 55);

    if (iconsCount <= 4) return 4;
    if (iconsCount <= 6) return 6;
    if (iconsCount <= 8) return 8;
    return 10;
  };

  export default getMaxIcons;