import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Nav</h1>

        <Route path="/" element={<Home />} />
        <AddUser />
        <EditUser />
      </Router>
    </div>
  );
}

export default App;
