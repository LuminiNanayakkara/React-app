import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/add" component={AddUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
