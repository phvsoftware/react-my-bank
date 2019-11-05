import React from "react";
import "./UserIcon.css";

class UserIcon extends React.Component {
  render = () => {
    return (
      <div className="usericon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-user"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    );
  };
}

export default UserIcon;
