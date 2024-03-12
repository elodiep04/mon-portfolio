import React, { useState } from "react";
import "../styles//Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      <h2> Mon Portfolio</h2>
      <div className="menu-nav">
        <ul
          className={openMenu ? "list-menu active" : "list-menu"}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expertise">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icon-container" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <FontAwesomeIcon icon={faXmark} className="icon-navbar" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon-navbar" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
