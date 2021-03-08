import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
