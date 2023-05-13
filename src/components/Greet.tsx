import React, { FC } from "react";
import { GreetProps } from "./GreetProps";

const Greet: FC<GreetProps> = ({ name, messageCount, isLoggedIn }) => {
  const loggedInMessage = `Welcome ${name} you have ${messageCount} unread messages`;
  const generalMessage = "Welcome guest, please sign in";

  return (
    <div>
      <h2>{isLoggedIn ? loggedInMessage : generalMessage}</h2>
    </div>
  );
};

export { Greet };
