import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBarLink({ route, label }) {
  return (
    <li>
      <a href={route} className="navbar__link">
        {label}
      </a>
    </li>
  );
}

export default NavBarLink;
