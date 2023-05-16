import React, { useState } from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import "./App.css";
import { LoggedIn } from "./components/state/LoggedIn";

function App() {
  const [value, setValue] = useState<string>("");
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
      <Input handleChange={(e) => setValue(e.target.value)} value={value} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>
        <Oscar />
      </Heading>
      <Button handleClick={(e, id) => console.log("Button clicked: ", e, id)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
    </div>
  );
}

export default App;
