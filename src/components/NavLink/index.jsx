import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBarLink({ route, label }) {
  return (
    <li>
      <NavLink to={route} className="navbar__link">
        {label}
      </NavLink>
    </li>
  );
}

export default NavBarLink;
