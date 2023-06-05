import React from "react";

interface PrivateProps {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
}

interface ProfileProps {
  name: string;
}

export type { PrivateProps, ProfileProps };
