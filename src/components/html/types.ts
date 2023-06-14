import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export type { ButtonProps };
