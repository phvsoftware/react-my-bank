import React from "react";
import "./Header.css";
import Logo from "./Logo";
import User from "./User.js";

const Header = () => {
  return (
    <div className="header">
      <Logo></Logo>
      <User userName="Philippe"></User>
    </div>
  );
};

export default Header;
