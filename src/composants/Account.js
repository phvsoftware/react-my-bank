import React from "react";
import "./Account.css";
import Button from "./Button";

const Account = props => {
  return (
    <div className="account">
      <div className="account-header" style={{ backgroundColor: props.account.color }}>
        <h1>{props.account.name}</h1>
        <h1>{props.account.balance}€</h1>
      </div>
      <div className="operations">
        {props.account.operations.map((value, index) => {
          return (
            <div className="operation">
              <h1>{value.date}</h1>
              <h2>{value.description}</h2>
              <h3>{value.amount}</h3>
            </div>
          );
        })}
      </div>
      <div className="see-more">
        <Button children={"See More"}></Button>
      </div>
    </div>
  );
};

export default Account;
