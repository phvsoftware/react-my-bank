import React from "react";
import UserIcon from "./UserIcon";
import "./User.css";

const User = props => {
  return (
    <div className="user">
      <h2>{props.userName}</h2>
      <UserIcon></UserIcon>
    </div>
  );
};

export default User;
