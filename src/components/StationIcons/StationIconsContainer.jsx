import { useState, useEffect } from "react";
import useIsMobile from "/src/hooks/useIsMobile";
import StationIcon from "/src/components/StationIcons/StationIcon";
import getMaxIcons from "/src/utils/getMaxIcons";
import { v4 as uuidv4 } from "uuid";

function StationIconsContainer({ pickedStations }) {
  const isMobile = useIsMobile();
  const maxIcons = getMaxIcons(isMobile);

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
