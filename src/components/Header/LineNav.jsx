import { useContext, useState } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import DropDownMenu from "/src/components/Header/DropDownMenu";
import caret from "/src/assets/caret.svg";

import "/src/css/line-nav.css";

export function LineNav() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);
  const [currentCity, setCurrentCity] = useState(currentLine.city);
  const [currentGroup, setCurrentGroup] = useState(currentLine.group);

  function Navbar({ children }) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{children}</ul>
      </nav>
    );
  }

  function NavItem({ children, text, icon }) {
    const [open, setOpen] = useState(false);

    return (
      <li className="nav-item">
        <div className="nav-clickable-wrapper" onClick={() => setOpen(!open)}>
          <a className="line-nav-overflow-hidden" href="#">{text}</a>
          {icon && <img className="caret" src={icon} alt="" />}
        </div>
        {open && children}
      </li>
    );
  }

  return (
    <Navbar>
      <NavItem text={currentCity}></NavItem>
      <NavItem text={currentGroup}></NavItem>
      <NavItem text={currentLine.title} icon={caret}>
        <DropDownMenu
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
          currentGroup={currentGroup}
          setCurrentGroup={setCurrentGroup}
        ></DropDownMenu>
      </NavItem>
    </Navbar>
  );
}
