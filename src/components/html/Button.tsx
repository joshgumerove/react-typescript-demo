import React, { FC } from "react";
import { ButtonProps } from "./types";

const CustomButton: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  console.log("what is the value of rest: ", rest);
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export { CustomButton };
