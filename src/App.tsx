import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Root, Post, Write } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={Post}></Route>
        <Route exact path="/">
          <Root></Root>
        </Route>
        <Route exact path="/write">
          <Write></Write>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
