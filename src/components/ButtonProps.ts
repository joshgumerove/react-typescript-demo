import { MouseEvent } from "react";

interface ButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

export type { ButtonProps };
