import React from "react";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Home />
      <AddUser />
      <EditUser />
    </div>
  );
}

export default App;
