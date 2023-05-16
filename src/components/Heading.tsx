import React, { FC } from "react";
import { HeadingProps } from "./HeadingProps";

const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

export { Heading };
