import { useContext, useState, useEffect } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import DropDownMenu from "/src/components/Header/DropDownMenu";
import caret from "/src/assets/caret.svg";

import "/src/css/line-nav.css";

export function LineNav() {
  const { currentCity, setCurrentCity } = useContext(CurrentLineContext);
  const { currentGroup, setCurrentGroup } = useContext(CurrentLineContext);
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [activeMenu, setActiveMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleDropDown = (val) => {
    if (activeMenu === val) {
      setActiveMenu(null);
      setOpen(false);
    } else {
      setActiveMenu(val);
      setOpen(true);
    }
  };

  function Navbar({ children }) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{children}</ul>
      </nav>
    );
  }

  function NavItem({ text, cat }) {
    return (
      <li className={`nav-item`}>
        <div
          className={`nav-clickable-wrapper ${
            activeMenu === cat ? " active " : ""
          }`}
          onClick={() => toggleDropDown(cat)}
        >
          <a href="#" className="line-nav-overflow-hidden">
            {text}
          </a>
          <img
            className={`caret${
              activeMenu === cat ? " flipped" : ""
            }`}
            src={caret}
            alt=""
          />
        </div>
      </li>
    );
  }

  return (
    <Navbar>
      <NavItem text={currentCity} cat="city"></NavItem>
      <NavItem text={currentGroup} cat="group-from-left"></NavItem>
      <NavItem text={currentLine.title} icon={caret} cat="line"></NavItem>
      {open && (
        <DropDownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} toggleDropDown={toggleDropDown} />
      )}
    </Navbar>
  );
}