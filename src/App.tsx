import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Root from "./pages/root";
import Post from "./pages/post";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/post/:id" component={Post}></Route>
                <Route path="/">
                    <Root></Root>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
