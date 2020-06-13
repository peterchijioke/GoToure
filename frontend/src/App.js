import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import "./Users/Components/UserItem.css";
import "./Users/Components/UserList.css";
import NewPalce from "./Places/Pages/NewPlaces";
import Users from "./Users/Pages/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPalce />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
