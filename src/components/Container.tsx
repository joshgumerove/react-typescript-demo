import React, { FC } from "react";
import { ContainerProps } from "./ContainerProps";

const Container: FC<ContainerProps> = ({ styles }) => {
  return <div style={styles}>Text content goes here</div>;
};

export { Container };
