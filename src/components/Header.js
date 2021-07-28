import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <span className="opacity">AIR</span>
        vironment
      </div>
      <div className="menu opacity">
        <div>ALL DATA</div>
        <div>AVERAGES</div>
      </div>
    </div>
  );
};

export default Header;
