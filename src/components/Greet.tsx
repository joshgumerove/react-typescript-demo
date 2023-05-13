import React, { FC } from "react";
import { GreetProps } from "./GreetProps";

const Greet: FC<GreetProps> = ({ name, messageCount }) => {
  return (
    <div>
      <h2>
        Welcome {name}! You have {messageCount} unread messages
      </h2>
    </div>
  );
};

export { Greet };
