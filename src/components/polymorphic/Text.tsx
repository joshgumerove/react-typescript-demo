import React, { FC } from "react";
import { TextProps } from "./TextProps";

const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className-={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export { Text };
