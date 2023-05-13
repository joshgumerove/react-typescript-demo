import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import "./App.css";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <Greet name="josh" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
