import { CSSTransition } from "react-transition-group";
import { useContext, useState } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import {
  linesCatalog,
  getCities,
  getGroupsForCity,
  getLinesForGroup,
} from "/src/lines/linesCatalog.js";
import { v4 as uuidv4 } from "uuid";
import "/src/css/drop-down-menu.css";
import clearStationSearchInput from "/src/utils/clearStationSearchInput";

export default function DropDownMenu() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [activeMenu, setActiveMenu] = useState("lines");
  const [activeCity, setActiveCity] = useState(currentLine.city);
  const [activeGroup, setActiveGroup] = useState(currentLine.group);

  const handleLineSelection = async (city, group, line) => {
    console.log(city)
    console.log(group)
    console.log(line)
    const data = await import(`/src/lines/${city}/${group}/${line}.js`);
    const lineData = data.default;
    clearStationSearchInput();
    setCurrentLine(lineData);
    console.log(lineData)
  };

  const handleGroupSelection = (group) => {
    setActiveGroup(group);
    setActiveMenu("lines");
  }

  const handleCitySelection = (city) => {
    setActiveCity(city);
    setActiveMenu("group");
  }

  function DropDownHeader(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
    );
  }

  function DropDownItemLine({children, value}) {
    return (
      <a href="#" className="menu-item" onClick={() => handleLineSelection(activeCity, activeGroup, value)}>
        {children}
      </a>
    );
  }

  function DropDownItemGroup({children, value}) {
    return (
      <a href="#" className="menu-item" onClick={() => handleGroupSelection(value)}>
        {children}
      </a>
    );
  }

  function DropDownItemCity({children, onClick, value}) {
    return (
      <a href="#" className="menu-item" onClick={() => handleCitySelection(value)}>
        {children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "lines"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropDownHeader goToMenu="group">Groups</DropDownHeader>
          {getLinesForGroup(currentLine.city, currentLine.group).map((line) => {
            return <DropDownItemLine key={uuidv4()} value={line}>{line}</DropDownItemLine>;
          })}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "group"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownHeader goToMenu="city">Cities</DropDownHeader>
          {getGroupsForCity(currentLine.city).map((group) => {
            return <DropDownItemGroup key={uuidv4()}>{group}</DropDownItemGroup>;
          })}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "city"}
        unmountOnExit
        timeout={500}
        classNames="menu-tertiary"
      >
        <div className="menu">
          {getCities().map((city) => {
            return <DropDownItemCity key={uuidv4()}>{city}</DropDownItemCity>;
          })}
        </div>
      </CSSTransition>
    </div>
  );
}