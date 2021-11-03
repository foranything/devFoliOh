import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Root from "./pages/root";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id"></Route>
        <Route path="/">
          <Root></Root>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
