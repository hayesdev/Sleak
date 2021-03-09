import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* This will be Chat component */}
              </Route>
            </Switch>
          </AppBody>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
