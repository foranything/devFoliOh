import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/post/:id"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
