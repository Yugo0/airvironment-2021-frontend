import React from "react";
import "../assets/styles/components/Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <Link to="/">
          <span className="opacity all-caps">air</span>
          vironment
        </Link>
      </div>

      <div className="menu opacity">
        <NavLink to="all-data" activeClassName="selected">
          All data
        </NavLink>
        <NavLink to="/averages" activeClassName="selected">
          Averages
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
