import React, { FC } from "react";
import { InputProps } from "./InputProps";

const Input: FC<InputProps> = ({ handleChange, value }) => {
  return (
    <>
      <input type="text" onChange={handleChange} />
      <h2>{value ? value : "please type something in the input"}</h2>
    </>
  );
};

export { Input };
