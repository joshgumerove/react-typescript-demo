import React, { FC } from "react";
import { PersonListProps } from "./PersonListProps";

const PersonList: FC<PersonListProps> = ({ names }) => {
  return (
    <div>
      {names.map(({ first, last }) => {
        return (
          <h2 key={first + last}>
            {first} {last}
          </h2>
        );
      })}
    </div>
  );
};

export { PersonList };
