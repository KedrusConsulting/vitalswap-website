import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBarLink({ route, label }) {
  return (
    <li>
      <HashLink to={route} className="navbar__link">
        {label}
      </HashLink>
    </li>
  );
}

export default NavBarLink;
