import React from "react";
import { Greet } from "./components/Greet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="josh" messageCount={20} isLoggedIn={false} />
    </div>
  );
}

export default App;
