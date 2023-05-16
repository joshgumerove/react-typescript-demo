import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";

const Button: FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={handleClick}>Click</button>;
};

export { Button };
