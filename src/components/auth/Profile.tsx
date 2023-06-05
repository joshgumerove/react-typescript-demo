import React, { FC } from "react";
import { ProfileProps } from "./Types";

const Profile: FC<ProfileProps> = ({ name }) => {
  return <div>Private Profile Component name is: {name}</div>;
};

export { Profile };
