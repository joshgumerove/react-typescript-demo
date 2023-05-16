import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";

const Button: FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={(e) => handleClick(e, 1)}>Click</button>;
};

export { Button };
