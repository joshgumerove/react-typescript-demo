import { FC } from "react";
import { useState } from "react";

const LoggedIn: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // could infer that this value is a boolean
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLout}>Logout</button>
      <div>{isLoggedIn ? "user is logged in" : "user is logged out"}</div>
    </div>
  );
};

export { LoggedIn };
