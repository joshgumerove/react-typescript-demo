import React, { FC } from "react";
import { AuthUser } from "./AuthUser";
import { useState } from "react";

const User: FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "Josh", email: "Gumerove" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>User name is: {user?.name}</p>
        <p>User email is: {user?.email}</p>
      </div>
    </div>
  );
};

export { User };
