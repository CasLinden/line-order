import { useContext, useState, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import StationIcon from "/src/components/StationIcons/StationIcon";
import getMaxIcons from "/src/utils/getMaxIcons";
import { v4 as uuidv4 } from "uuid";

function StationIconsContainer({ pickedStations }) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(window.innerWidth);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", updateIsMobile);
    updateIsMobile();

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const maxIcons = getMaxIcons(isMobile);
  console.log(maxIcons);

  const renderStationIcons = () => {
    if (!isMobile || pickedStations.length <= maxIcons) {
      return pickedStations.map((stat) => {
        return <StationIcon key={uuidv4()} stat={stat} />;
      });
    } else {
      const iconsBeforeEllipsis = Math.floor(maxIcons / 2);
      const iconsAfterEllipsis = maxIcons - iconsBeforeEllipsis;
      return (
        <>
          {pickedStations.slice(0, iconsBeforeEllipsis).map((stat) => (
            <StationIcon key={uuidv4()} stat={stat} />
          ))}
          <div className="ellipsis">...</div>
          {pickedStations.slice(-iconsAfterEllipsis).map((stat) => (
            <StationIcon key={uuidv4()} stat={stat} />
          ))}
        </>
      );
    }
  };

  return <>{renderStationIcons()}</>;
}

export default StationIconsContainer;
