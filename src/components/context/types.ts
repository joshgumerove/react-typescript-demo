import React from "react";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface AuthUser {
  name: string;
  email: string;
}

interface UserContextType {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export type {
  ThemeContextProviderProps,
  UserContextProviderProps,
  AuthUser,
  UserContextType,
};
