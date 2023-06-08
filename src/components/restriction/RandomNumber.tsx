import React, { FC } from "react";
import { RandomNumberProps } from "./types";

const RandomNumber: FC<RandomNumberProps> = ({
  value,
  isPositive,
  isNegative,
  isZero,
}) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export { RandomNumber };
