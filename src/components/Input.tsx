import React, { FC, ChangeEvent } from "react";
import { InputProps } from "./InputProps";

const Input: FC<InputProps> = ({ handleChange, value }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("here is the event", e.target.value);
  };

  //   note: can define a function with types inside the component
  return (
    <>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleInputChange} />
      <h2>{value ? value : "please type something in the input"}</h2>
    </>
  );
};

export { Input };
