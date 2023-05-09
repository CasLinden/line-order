import { CSSTransition } from "react-transition-group";
import { useContext, useState } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import { linesCatalog, getCities, getGroupsForCity, getLinesForGroup,} from "/src/lines/linesCatalog.js";
import { v4 as uuidv4 } from "uuid";
import "/src/css/drop-down-menu.css";
import clearStationSearchInput from "/src/utils/clearStationSearchInput";
import arrowRight from "/src/assets/arrow-right.svg";
import arrowLeft from "/src/assets/arrow-left.svg";

export default function DropDownMenu({ currentCity, setCurrentCity, currentGroup, setCurrentGroup}) {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [activeMenu, setActiveMenu] = useState("line");
  const [menuHeight, setMenuHeight] = useState(null);


  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
 
  const handleLineSelection = async (city, group, line) => {
    const data = await import(`../../lines/${city}/${group}/${line}.js`);
    console.log(data.default)
    const lineData = data.default;
    clearStationSearchInput();
    setCurrentLine(lineData);
  };

  const handleGroupSelection = (group) => {
    setCurrentGroup(group);
    setActiveMenu("line");
    forceMenuExitToLeft()
  };

  const handleCitySelection = (city) => {
    setCurrentCity(city);
    setCurrentGroup(getGroupsForCity(city)[0]);
    setActiveMenu("group-from-right");
  };

  const forceMenuExitToLeft = () => {
    document.querySelector(".menu").classList.toggle("force-left-exit");
  }

  function DropDownHeader(props) {
    return (
      <div className="menu-item"
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.leftIcon && <img className="icon-button" src={props.leftIcon} />}
        
        <a
          href="#"
        >
          {props.children}
        </a>
        {props.rightIcon && (
          <img className="icon-right" src={props.rightIcon} />
        )}
      </div>
    );
  }

  function DropDownItemLine({ children, value }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => handleLineSelection(currentCity, currentGroup, value)}
        onTouchStart={() => handleLineSelection(currentCity, currentGroup, value)}
      >
        {children}
      </a>
    );
  }

  function DropDownItemGroup({ children, value }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => handleGroupSelection(value)}
      >
        {value}
      </a>
    );
  }

  function DropDownItemCity({ children, onClick, value }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => handleCitySelection(value)}
      >
       {value}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "line"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight} 
        classNames={{
          enter: 'enter-from-right',
          enterActive: 'enter-from-right-active',
          exit: 'exit-to-right',
          exitActive: 'exit-to-right-active',
        }}
      >
        <div className="menu">
          <DropDownHeader goToMenu="group-from-left" leftIcon={arrowLeft}>
            Change Group {`(${currentGroup})`}
          </DropDownHeader>
          {console.log(currentGroup)}
          {console.log(currentCity)}
          {getLinesForGroup(currentCity, currentGroup).map((line) => {
            return (
              <DropDownItemLine key={uuidv4()} value={line}>
                {line}
              </DropDownItemLine>
            );
          })}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "group-from-right"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: 'enter-from-right',
          enterActive: 'enter-from-right-active',
          exit: 'exit-to-left',
          exitActive: 'exit-to-left-active',
          
        }}
      >
        <div className="menu">
          <DropDownHeader goToMenu="city" leftIcon={arrowLeft}>Change City</DropDownHeader>
          {getGroupsForCity(currentCity).map((group) => {
            return (
              <DropDownItemGroup key={uuidv4()} value={group}>{group}</DropDownItemGroup>
            );
          })}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "group-from-left"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: 'enter-from-left',
          enterActive: 'enter-from-left-active',
          exit: 'exit-to-right',
          exitActive: 'exit-to-right-active',
        }}
      >
        <div className="menu">
          <DropDownHeader goToMenu="city" leftIcon={arrowLeft}>Change City</DropDownHeader>
          { getGroupsForCity(currentCity).map((group) => {
            return (
              <DropDownItemGroup key={uuidv4()} value={group}>{group}</DropDownItemGroup>
            );
          })}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "city"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: 'enter-from-left',
          enterActive: 'enter-from-left-active',
          exit: 'exit-to-left',
          exitActive: 'exit-to-left-active',
        }}
      >
        <div className="menu">
          {getCities().map((city) => {
            return <DropDownItemCity key={uuidv4()} value={city}>{city}</DropDownItemCity>;
          })}
        </div>
      </CSSTransition>
    </div>
  );
}