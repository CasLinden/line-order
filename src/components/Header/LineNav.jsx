import { useContext, useState } from "react";
import { CurrentLineContext } from "/src/CurrentLineContext";
import DropDownMenu from "/src/components/Header/DropDownMenu";
import caret from "/src/assets/caret.svg";


import "/src/css/line-nav.css";

export function LineNav() {
  const { currentLine, setCurrentLine } = useContext(CurrentLineContext);

  return (
    <Navbar>
      <NavItem text={currentLine.city}></NavItem>
      <NavItem text={currentLine.group}></NavItem>
      <NavItem text={currentLine.title} icon={caret}>
        <DropDownMenu></DropDownMenu>
      </NavItem>
    </Navbar>
  );

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
      <li className="nav-item" >
        <div className="nav-clickable-wrapper" onClick={() => setOpen(!open)}>
          <a href="#" className="icon-button">
            {text}
          </a>
          {icon && <img className="caret" src={icon} alt="" />}
        </div>
        {open && children}
      </li>
    );
  }
}