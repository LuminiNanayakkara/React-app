import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/home" component={Home} />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
