import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NewPalce from "./Places/Pages/NewPlaces";
import Users from "./Users/Pages/Users";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
import "./Shared/Components/Navigation/MainHeader.css";
import "./Shared/Components/Navigation/MainNavigation.css";
import "./Shared/Components/Navigation/NavLinks.css";
import "./Shared/Components/Navigation/SideDrawer.css";
import "./Shared/Components/UIElements/Backdrop.css";
import UserPlaces from "./Places/Pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPalce />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
