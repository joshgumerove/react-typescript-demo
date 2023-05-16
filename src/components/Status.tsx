import React, { FC } from "react";
import { StatusProps } from "./StatusProps";

const Status: FC<StatusProps> = ({ status }) => {
  let message;

  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully";
      break;
    case "error":
      message = "Error fetching data";
      break;
    default:
      message = "";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export { Status };
