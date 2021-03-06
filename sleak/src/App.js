import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import styled from "styled-components";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Threads from "./components/Threads";
import Mentions from "./components/Mentions";
import SavedItems from "./components/SavedItems";
import ChannelBrowser from "./components/ChannelBrowser";
import FileBrowser from "./components/FileBrowser";
import People from "./components/People";
import Apps from "./components/Apps";
import logo from "./green_S.jpg";
import Spinner from "react-spinkit";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={logo} alt="sleak logo" />
          <Spinner name="ball-spin-fade-loader" color="#19a42e" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
                <Route path="/threads">
                  <Threads />
                </Route>
                <Route path="/mentions">
                  <Mentions />
                </Route>
                <Route path="/saved">
                  <SavedItems />
                </Route>
                <Route path="/channels">
                  <ChannelBrowser />
                </Route>
                <Route path="/people">
                  <People />
                </Route>
                <Route path="/apps">
                  <Apps />
                </Route>
                <Route path="/files">
                  <FileBrowser />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 30px;
  }
`;
