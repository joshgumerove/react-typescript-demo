import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
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
      <Greet name="josh" messageCount={30} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>
        <Oscar />
      </Heading>
      <Button handleClick={() => console.log("Button clicked")} />
    </div>
  );
}

export default App;
