import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [openDrawerState, setOpenDrawerState] = useState(false);

  const openDrawerHandler = () => {
    setOpenDrawerState(true);
  };
  const closeDrawerHandler = () => {
    setOpenDrawerState(false);
  };
  return (
    <React.Fragment>
      {openDrawerState ? <Backdrop onClick={closeDrawerHandler} /> : null}

      <SideDrawer show={openDrawerState} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link>Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
