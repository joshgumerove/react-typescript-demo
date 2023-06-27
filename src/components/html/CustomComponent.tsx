import React, { FC } from "react";
import { Greet } from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.isLoggedIn && <p>Hello Worlds</p>}
      <p>{props.name} is logged in</p>
      <p>He has this many messages: {props.messageCount}</p>
    </div>
  );
};

export { CustomComponent };
