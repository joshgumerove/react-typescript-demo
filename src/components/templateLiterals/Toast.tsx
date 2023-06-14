import React, { FC } from "react";
import { ToastProps } from "./types";

const Toast: FC<ToastProps> = ({ position }) => {
  return <div>Toast Notification Postion - {position}</div>;
};

export { Toast };
