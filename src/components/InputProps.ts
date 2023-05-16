import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type { InputProps };
