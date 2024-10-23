import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Room from "./Components/Rooms";
import Single_Room from "./Components/SingleRoom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Room} />
          <Route exact path="/rooms/:slug" component={Single_Room} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
