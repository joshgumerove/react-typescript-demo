import React, { FC } from "react";
import { GreetProps } from "./GreetProps";

const Greet: FC<GreetProps> = ({ name }) => {
  return (
    <div>
      <h2>Welcome {name}! You have 10 unread messages</h2>
    </div>
  );
};

export { Greet };
