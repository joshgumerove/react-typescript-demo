import React, { FC } from "react";
import { PersonProps } from "./PersonProps";

const Person: FC<PersonProps> = ({ name }) => {
  const { first, last } = name;
  return (
    <div>
      {first} {last}
    </div>
  );
};

export { Person };
