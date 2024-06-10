import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useGlobalContext } from "../context";
import style from "./sidebar.module.css";

const classNames = require("classnames");

const Sidebar = (props) => {
    // const navigate = useNavigate();
    // const [search, setSearch] = React.useState("");
    // Navbar menu (mobile and tablet view)
    // const [showMenu, setShowMenu] = React.useState(false);
    const [showSection, setShowSection] = React.useState(false);
    // Search input (desktop view)
    // const [showSearch, setShowSearch] = React.useState(false);

    const { sections, formatSection } = useGlobalContext();
    return (
<div className={style.sidebar}>
        {showSection ? (
          
                  <HiOutlineX
                    className={classNames(style.icon, style.menuSectionIcon)}
                    onClick={() => setShowSection(false)}
                  />
                ) : (
                  <HiOutlineMenu
                    className={classNames(style.icon, style.menuSectionIcon)}
                    onClick={() => setShowSection(true)}
                  />
                )}
        {showSection && (
          
        
      <ul className={style.sections}>
        {sections.map((section, index) => {
          return (
            <li key={index}>
              {section === "home" ? (
                <NavLink to={`/`} onClick={() => setShowSection(false)}>
                  {formatSection(section)}
                  </NavLink>
              ) : (
                <NavLink to={`/section/${section}`} onClick={() => setShowSection(false)}>
                  {formatSection(section)}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
      )}
</div>
    )
    }
    export default Sidebar;