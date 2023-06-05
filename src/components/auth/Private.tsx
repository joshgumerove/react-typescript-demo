import React, { FC } from "react";
import { PrivateProps } from "./Types";
import { Login } from "./Login";

const Private: FC<PrivateProps> = ({ isLoggedIn, component: Component }) => {
  if (isLoggedIn) {
    return <Component name="Josh Gumerove" />;
  } else {
    return <Login />;
  }
};

export { Private };
