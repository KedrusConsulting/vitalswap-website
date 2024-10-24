import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBarLink({ route, label, onClick }) {
  return (
    <li>
      <a href={route} className="navbar__link" onClick={onClick}>
        {label}
      </a>
    </li>
  );
}

export default NavBarLink;
