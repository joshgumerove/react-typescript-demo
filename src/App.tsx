import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import "./App.css";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Josh", last: "Gumerove" },
  ];
  return (
    <div className="App">
      <Greet name="josh" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

// stopped: continue on lesson 5 https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5
export default App;
