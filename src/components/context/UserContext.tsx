import { createContext, useState } from "react";
import { UserContextProviderProps, AuthUser, UserContextType } from "./types";
// import { FC } from "react";

const UserContext = createContext({} as UserContextType); // very common to use type assertion in this scenario

// note the alternative syntax for specifying props below

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
