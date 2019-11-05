import React from "react";
import "./Accounts.css";
import Account from "./Account";

const Accounts = props => {
  return (
    <div>
      {props.accounts.map((account, index) => {
        return <Account account={account}></Account>;
      })}
    </div>
  );
};

export default Accounts;
